import { supabase } from "@/lib/supabaseclient";
import CaseCards from "./ui/caseCards";

export default async function CasesSection() {
  const { data, error } = await supabase.from("ib-cases").select("*");

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const cases = data;

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-10 min-[850px]:gap-5 lg:gap-6 mx-3.5 py-8">
      {cases.map((caseData) => (
        <CaseCards key={caseData.id} title={caseData.h1} intro={caseData.intro} img={caseData.slug} slug={caseData.slug} />
      ))}
    </div>
  );
}
