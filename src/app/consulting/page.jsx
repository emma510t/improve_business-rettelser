import Image from "next/image";
import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import { H1, H2, P } from "@/components/ui/fonts";
import { Button, buttonVariants } from "@/components/ui/button";
import ProductCardSection from "@/components/productCardSection";
import Link from "next/link";

export const metadata = {
  title: "Consulting",
};

export default function consulting() {
  return (
    <>
      <SplitSection desktop>
        <SplitSectionChild desktop img className="order-last">
          <Image
            src="/img/consulting-hero.jpg"
            alt="To personer taler ved bord"
            width={1920}
            height={1080}
            className="md:w-full md:h-full max-h-[340px] object-cover md:max-h-none bg-ibsilver-400 2xl:aspect-[2/1]"
            priority
          />
        </SplitSectionChild>
        <SplitSectionChild className={"bg-ibsilver-100"}>
          <div className="max-w-[600px] flex flex-col 2xl:ml-auto">
            <PageTagBreadcrumb currentPage={"Consulting"} />
            <H1 className={""}>Sammen løser vi dine udfordringer</H1>
            <P className={""}>Vi hjælper med at udvikle og implementere en effektiv strategi, hvor vi identificerer jeres udfordringer, og sikrer en bæredygtig og fremadseende løsning.</P>
            <P className={""}>Vores ekspertområder dækker alt fra udviklingsfasen af nye ideer og strategier, samt det værdiskabende kommunikative arbejde, som følger en ny implementeret strategi.</P>
            <Link className="pt-7 mt-auto" href="#ekspertOmråder">
              <Button hasSmallChevron className="gap-0.5">
                Se vores ekspertområder
              </Button>
            </Link>
          </div>
        </SplitSectionChild>
      </SplitSection>
      <section className="md:flex md:min-h-[50vh]">
        <SplitSectionChild className={"max-md:pb-0 bg-ibsilver-600 md:bg-ibgreen-400 px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10"}>
          <div className="md:flex md:flex-col md:justify-between max-w-[600px] 2xl:ml-auto md:h-full">
            <H2 className={"max-md:text-ibsilver-100 pb-8"}>Sådan kommer du i gang</H2>
            <Link className="hidden md:block md:mr-auto" href="/kontakt">
              <Button variant="ghost" size="noPadding" hasArrow>
                Kontakt os
              </Button>
            </Link>
          </div>
        </SplitSectionChild>
        <SplitSectionChild className={"bg-ibsilver-600 max-md:pt-0 md:pt-12"}>
          <div className="max-w-[600px] flex flex-col gap-8 h-full">
            <div className="flex gap-3">
              <p className="text-ibgreen-400 font-semibold text-2xl md:text-3xl">1: </p>
              <P className={"text-ibsilver-100 font-semibold"}>Udforsk vores forskellige ydelser nedenfor og find det, der bedst matcher dine behov.</P>
            </div>
            <div className="flex gap-3">
              <p className="text-ibgreen-400 font-semibold text-2xl md:text-3xl">2: </p>
              <P className={"text-ibsilver-100 font-semibold"}>Klik på ydelsen for at læse mere om hvad vi kan gøre for dig indenfor området.</P>
            </div>
            <div className="flex gap-3">
              <p className="text-ibgreen-400 font-semibold text-2xl md:text-3xl">3: </p>
              <P className={"text-ibsilver-100 font-semibold"}>Skriv til os via vores kontaktformular for at aftale, hvordan vi bedst løser dine udfordringer.</P>
            </div>
            <P className={"text-ibsilver-100 md:mt-auto"}>VI glæder os til at høre fra dig!</P>
            <Link className="md:hidden" href="/kontakt">
              <Button className="mr-auto" variant="ghostWhite" size="noPadding" hasArrow>
                Kontakt os
              </Button>
            </Link>
          </div>
        </SplitSectionChild>
      </section>
      <section id="ekspertOmråder" className="bg-ibsilver-500 scroll-m-[79px]">
        <div className="pb-8 md:pb-24 pt-[25px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2 className={"text-ibsilver-100"}>Vores ekspertområder</H2>
          <ProductCardSection parentCategory="consulting" cardVariant="white" desc></ProductCardSection>
        </div>
      </section>
      <SplitSection desktop>
        <SplitSectionChild desktop img>
          <Image
            src="/img/consulting-potentiale.jpg"
            alt="To personer taler ved bord"
            width={1920}
            height={1080}
            className="md:w-full md:h-full max-h-[380px] object-cover md:max-h-none bg-ibsilver-400 2xl:aspect-[2/1]"
          />
        </SplitSectionChild>
        <SplitSectionChild className="flex flex-col">
          <div className="max-w-[600px]">
            <H2>Opnå højere potentiale</H2>
            <P>Vores mål er at optimere din virksomheds potentiale gennem skræddersyet rådgivning baseret på høje faglige standarder og et solidt etisk fundament.</P>
            <P>Sammen med vores erfarne konsulenter identificerer vi nøgleområder inden for bæredygtighed og udvikler gradvise løsninger til at forbedre din virksomheds præstationer og resultater.</P>
          </div>
          <Link className="pt-7 mt-auto w-fit h-fit" href="/kontakt">
            <Button variant="ghost" hasArrow size="noPadding">
              Kontakt os
            </Button>
          </Link>
        </SplitSectionChild>
      </SplitSection>
    </>
  );
}
