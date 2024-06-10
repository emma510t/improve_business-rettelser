import { supabase } from "@/lib/supabaseclient";
import { H1, H2, P } from "@/components/ui/fonts";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import ProductCardSection from "@/components/productCardSection";
import CaseStatementCard from "@/components/ui/caseStatementCard";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const { data, error } = await supabase.from("ib-cases_v2").select("*").eq("slug", slug);

  if (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Cases",
      description: "Cases",
    };
  }

  const cases = data[0];

  return {
    title: "Case: " + cases?.h1 || "Default Title",
  };
}

export default async function CasePage({ params }) {
  const { data, error } = await supabase.from("ib-cases_v2").select("*").eq("slug", params.slug);

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const slugData = data[0];

  const statements = slugData.statements || [];

  return (
    <>
      <div className="bg-ibsilver-600 pb-8 md:pb-16 pt-[25px] md:pt-[40px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <PageTagBreadcrumb currentPage="Case Study" dark />
        <H1 className="text-ibsilver-100">{slugData.h1}</H1>
      </div>

      <section className="md:flex md:min-h-[50vh]">
        <SplitSectionChild className={"pb-0"}>
          <H2 className="font-bold font-poppins text-[32px] max-w-[600px] 2xl:ml-auto">Situation og udfordringer</H2>
        </SplitSectionChild>
        <SplitSectionChild className={"pt-0"}>
          <P className="max-w-[600px]">{slugData.situation_udfordringer}</P>
        </SplitSectionChild>
      </section>
      <SplitSection>
        <SplitSectionChild sticky className={"pb-2 bg-ibsilver-500 text-ibsilver-100 md:bg-ibgreen-400 md:text-ibsilver-600"}>
          <div className="lg:flex lg:flex-col lg:justify-center lg:h-full max-w-[600px] 2xl:ml-auto">
            <h2 className="font-bold text-[32px]/[1.4] pb-4 sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl">Løsning</h2>
            <p className="text-base md:text-3xl">Improve Business’ løsningsforslag er tredelt</p>
          </div>
        </SplitSectionChild>
        <SplitSectionChild className={"pt-0 bg-ibsilver-500 text-ibsilver-100"}>
          <div className="flex flex-col gap-8 py-4 md:gap-12 max-w-[600px]">
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-ibgreen-400 text-2xl md:text-3xl">Fase 1: </span>
                {slugData.fase_1_headline}
              </h3>
              <P>{slugData.fase_1_text}</P>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-ibgreen-400 text-2xl md:text-3xl">Fase 2: </span>
                {slugData.fase_2_headline}
              </h3>
              <P>{slugData.fase_2_text}</P>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">
                <span className="text-ibgreen-400 text-2xl md:text-3xl">Fase 3: </span>
                {slugData.fase_3_headline}
              </h3>
              <P>{slugData.fase_3_text}</P>
            </div>
          </div>
        </SplitSectionChild>
      </SplitSection>
      <section className="px-3 py-8 max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-3">
        {statements.map((statement) => (
          <CaseStatementCard key={statement.id} desc={statement.statement} title={slugData.h1} />
        ))}
      </section>

      <section className="bg-ibsilver-600">
        <div className="pb-8 md:pb-24 pt-[25px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2 className="text-ibsilver-100">Se vores konsulentområder</H2>
          <ProductCardSection cardVariant="white" parentCategory="consulting" />
        </div>
      </section>
    </>
  );
}
