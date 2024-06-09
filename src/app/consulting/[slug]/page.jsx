import ProductCardSection from "@/components/productCardSection";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H1, H2, P } from "@/components/ui/fonts";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import YdelseSection from "@/components/ydelseSection";
import { supabase } from "@/lib/supabaseclient";
import Image from "next/image";
import he from "he";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const { data, error } = await supabase
    .from("ib-product-cards_v2")
    .select("*")
    .eq("url", slug);

  if (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default description",
    };
  }

  const product = data[0];

  return {
    title: product?.title.replace("&shy;", "") || "Default Title",
  };
}

export default async function Page({ params }) {
  const { data, error } = await supabase
    .from("ib-product-cards_v2")
    .select("*")
    .eq("url", params.slug);

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const slugData = data[0];

  if (!Array.isArray(slugData.content)) {
    return null; // or some fallback UI
  }
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => <P key={index}>{item.text}</P>);
    } else if (typeof content === "string") {
      // Split string into paragraphs based on line breaks if needed
      return content
        .split("\r\n")
        .map((line, index) => <P key={index}>{line}</P>);
    } else {
      return <p>Invalid content format</p>;
    }
  };

  return (
    <>
      <SplitSection>
        <SplitSectionChild img>
          <Image
            src={`/img/${slugData.icon}.jpg`}
            alt={slugData.title}
            width={800}
            height={800}
            className="md:w-full md:h-full max-h-[340px] object-cover md:max-h-none bg-ibsilver-400"
            priority
          />
        </SplitSectionChild>
        <SplitSectionChild className="bg-ibsilver-600 text-ibsilver-100">
          <PageTagBreadcrumb
            dark
            parent={"Consulting"}
            parentHRef={"/consulting"}
            currentPage={he.decode(slugData.title)}
          />
          <H1>{he.decode(slugData.title)}</H1>
          {renderContent(slugData.content)}
          {/* {slugData.content.map((content, index) => (
            <P key={index}>{content.text}</P>
          ))} */}
        </SplitSectionChild>
      </SplitSection>
      <section>
        <div className="pb-8 md:pb-12 pt-[25px] md:pt-[40px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2 className="">
            Vores <span className="lowercase">{he.decode(slugData.title)}</span>
            s&shy;ydelser
          </H2>
          <ProductCardSection parentCategory={slugData.icon} />
        </div>
      </section>
      <div>
        <YdelseSection parent={slugData.icon} title={slugData.title} />
      </div>
      <section>
        <div className="pb-8 md:pb-12 pt-[25px] md:pt-[40px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2 className="">Se vores andre ekspertiseområder</H2>
          <ProductCardSection
            slugIcon={slugData.icon}
            parentCategory={slugData.parent}
          />
        </div>
      </section>
    </>
  );
}
