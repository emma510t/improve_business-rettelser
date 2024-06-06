import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H2, H3, P } from "@/components/ui/fonts";
import { supabase } from "@/lib/supabaseclient";
import Image from "next/image";
import ProductCardSection from "@/components/productCardSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { data, error } = await supabase
    .from("ib-product-cards")
    .select("*")
    .eq("url", params.slug + "/" + params.id);

  if (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default description",
    };
  }

  const product = data[0];

  return {
    title: product?.title || "Default Title",
  };
}

export default async function page({ params }) {
  const { data, error } = await supabase
    .from("ib-product-cards")
    .select("*")
    .eq("url", params.slug + "/" + params.id);

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const idData = data[0];

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
        <SplitSectionChild img className="order-last">
          <Image
            className="md:w-full md:h-full max-h-[340px] object-cover md:max-h-none bg-ibsilver-400"
            src={`/img/ydelse/${idData.icon}.jpg`}
            alt={`${idData.title} billede`}
            width={800}
            height={800}
            priority
          />
        </SplitSectionChild>
        <SplitSectionChild>
          <div
            className="md:pb-7
           "
          >
            <PageTagBreadcrumb
              grandParent={"Consulting"}
              grandParentHRef={"/consulting"}
              parent={idData.parent}
              parentHRef={`/consulting/${params.slug}`}
              currentPage={idData.title}
            />
            <H2>{idData.title}</H2>
            {renderContent(idData.ydelse_content_1)}

            {/*  {idData.ydelse_content_1.map((content, index) => (
              <P key={index}>{content.text}</P>
            ))} */}
            <Link className="hidden md:block md:mr-auto" href="/kontakt">
              <Button hasArrow>Kontakt os</Button>
            </Link>
          </div>

          {idData.ydelse_headline_2 && idData.ydelse_content_2 && (
            <div className="pt-5">
              <H3>{idData.ydelse_headline_2}</H3>
              {renderContent(idData.ydelse_content_2)}
              {/* {idData.ydelse_content_2.map((content, index) => (
                <P key={index}>{content.text}</P>
              ))} */}
            </div>
          )}
          {idData.ydelse_headline_3 && idData.ydelse_content_3 && (
            <div className="pt-5">
              <H3>{idData.ydelse_headline_3}</H3>
              {renderContent(idData.ydelse_content_3)}
              {/*   {idData.ydelse_content_3.map((content, index) => (
                <P key={index}>{content.text}</P>
              ))} */}
            </div>
          )}
          <div className="pb-8 md:pb-12 pt-[25px] md:pt-[40px] max-w-[1280px] w-full mx-auto">
            <H2 className="">Se vores andre ekspertiseområder</H2>
            <ProductCardSection
              slugIcon={idData.icon}
              parentCategory={idData.parent}
            />
          </div>
        </SplitSectionChild>
      </SplitSection>
    </>
  );
}
