import FormSetup from "@/components/formSetup";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H1, H2, P } from "@/components/ui/fonts";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import Image from "next/image";

export const metadata = {
  title: "Kontakt",
};

export default function kontakt() {
  return (
    <>
      <SplitSection>
        <SplitSectionChild img className="order-last">
          <div className="md:w-full md:h-full h-[100vh] max-h-[340px] md:max-h-none bg-ibblue-400 flex">
            <Image src="/img/kontakt-hero.webp" alt="Improve Business' kontorbygning" width={1920} height={1080} className="mt-auto  object-cover 2xl:h-full" priority />
          </div>
        </SplitSectionChild>
        <SplitSectionChild>
          <div className="max-w-[700px]">
            <PageTagBreadcrumb currentPage={"Kontakt"} />
            <H1>Tag kontakt</H1>

            <FormSetup />
          </div>
        </SplitSectionChild>
      </SplitSection>
      <div className="bg-ibsilver-600 text-ibsilver-100 mt-8  md:mt-0">
        <div className="max-w-[1280px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto pt-8 pb-16">
          <H2>Kontaktinformation</H2>
          <a href="tel:+4530141614" className="font-bold font-poppins text-[18px] w-fit	">
            +45 30 14 16 14
          </a>
          <a href="mailto:kontakt@improvebusiness.dk" className="font-bold font-poppins text-[18px] w-fit	">
            kontakt@improvebusiness.dk
          </a>
        </div>
      </div>

      <section className="mt-8 mb-12">
        <div className="min-[850px]:flex min-[850px]:gap-12 lg:gap-24 max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto  md:py-8">
          <div>
            <H2>Consulting</H2>
            <div className="flex gap-6 mt-6 md:mt-8">
              <div className="min-w-[120px]">
                <Image
                  className="bg-ibgreen-400 object-cover aspect-square px-2 bg-gradient-to-t from-darkoverlay via-transparent via-transparent to-transparent"
                  src="/img/employees/anne.webp"
                  width={125}
                  height={125}
                  alt="billede af Anne"
                />
              </div>
              <div>
                <P>Anne Hørsted er vores CEO og ekspert på Sustainability. Hun er klar til at hjælpe dig, når kundekravene rammer din virkelighed.</P>
                <a href="mailto:anne@improvebusiness.dk" className="flex gap-1 items-center text-ibgreen-400 hover:text-ibgreen-200 mt-2">
                  <Image src="/img/svg-icons/email.svg" width={24} height={24} alt="email ikon" />
                  anne@improvebusiness.dk
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 min-[850px]:mt-0">
            <H2>Academy</H2>
            <div className="flex gap-6 mt-6 md:mt-8">
              <div className="min-w-[120px]">
                <Image
                  className="bg-ibgreen-400 object-cover aspect-square px-2 bg-gradient-to-t from-darkoverlay via-transparent via-transparent to-transparent"
                  src="/img/employees/thea.webp"
                  width={125}
                  height={125}
                  alt="billede af Thea"
                />
              </div>
              <div>
                <P>Thea Eriksen er underviser og projektleder på vores Academy forløb og er klar til at hjælpe dig med at forløse dit potentiale.</P>
                <a href="mailto:thea@improvebusiness.dk" className="flex gap-1 items-center text-ibgreen-400 hover:text-ibgreen-200 mt-2">
                  <Image src="/img/svg-icons/email.svg" width={24} height={24} alt="email ikon" />
                  thea@improvebusiness.dk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
