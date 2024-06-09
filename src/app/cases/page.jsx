import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import { H1, H2, P } from "@/components/ui/fonts";
import CasesSection from "@/components/casesSection";

export const metadata = {
  title: "Cases",
};

export default function cases() {
  return (
    <>
      <div className="bg-ibsilver-600 pb-8 md:pb-16 pt-[25px] md:pt-[40px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <PageTagBreadcrumb currentPage="Cases" dark />
        <H1 className="text-ibsilver-100">
          Udforsk Improve Business&apos; tidligere arbejde
        </H1>
      </div>
      <section className="pb-8 md:pb-12 pt-[25px] md:pt-[40px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
        <H2 className="text-ibsilver-600">Se vores cases</H2>
        <P>
          Se vores tidligere arbejde ved at klikke ind på de enkelte cases
          nedenfor og opdag, hvordan vi har hjulpet virksomheder med at nå deres
          mål og skabe vækst.
        </P>
        <CasesSection />
      </section>
    </>
  );
}
