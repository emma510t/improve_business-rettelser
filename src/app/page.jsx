import CasesSection from "@/components/casesSection";
import ProductCardSection from "@/components/productCardSection";
import SplitSection from "@/components/splitSection";
import SplitSectionChild from "@/components/splitSectionChild";
import TestimonialSlider from "@/components/testimonialSlider";
import { Button } from "@/components/ui/button";
import { H1, H2, P } from "@/components/ui/fonts";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="h-[60vh] md:h-[75vh] relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[-1]">
          <Image
            src="/img/forside-hero.jpeg"
            height={4096}
            width={2681}
            alt="Forside billede af to konsulenter i et kontor"
            className="object-cover object-center h-full w-full"
            priority
          />
        </div>
        <div className="h-full w-full bg-herooverlay flex items-center z-10">
          <div className="max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
            <H1 className="text-ibsilver-100 max-w-[900px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
              Bæredygtig fremgang gennem innovativ udvikling
            </H1>
            <p className="text-ibsilver-100 text-[20px] md:text-[24px] lg:text-[26px] max-w-[585px] mt-4">
              Fremtidssikrede strategier og løsninger for dig og din virksomhed
            </p>
            <Link href="/kontakt" className="mt-16 w-fit h-fit">
              <Button className="md:px-[30px] md:py-[12px]" size="lg" hasArrow>
                Kontakt os
              </Button>
            </Link>
          </div>
        </div>
        <Link
          href="#consultant-areas"
          aria-label="Konsulentområder"
          className="max-md:hidden"
        >
          <Button
            hasChevron
            size="xlIcon"
            aria-label="Konsulentområder"
            className="left-1/2 transform -translate-x-1/2 rounded-full absolute -bottom-7 bg-ibsilver-100 border-2  border-ibsilver-500 hover:bg-ibsilver-100"
          />
        </Link>
      </section>
      <section
        id="consultant-areas"
        className="mt-12 mb-24 md:mt-16 scroll-mt-28"
      >
        <div className="max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <div className=" min-[875px]:grid min-[875px]:grid-cols-2">
            <H2>Konsulentområder</H2>
            <P className="max-w-[640px]">
              Vi hjælper SMV’er med at udvikle og implementere processer,
              strategier og kommunikation, med bæredygtighed i centrum. Vores
              arbejde er målrettet og effektivt med det formål at opnå de bedste
              resultater for din virksomhed.
            </P>
          </div>
          <div>
            <ProductCardSection parentCategory={"consulting"} />
          </div>
        </div>
      </section>
      <SplitSection>
        <SplitSectionChild img>
          <Image
            src="/img/forside-woman-presentation.jpeg"
            alt="kvinde holder præsentation"
            width={768}
            height={750}
            className="md:w-full md:h-full max-h-[340px] object-cover md:max-h-none bg-ibsilver-400"
          />
        </SplitSectionChild>
        <SplitSectionChild className="md:flex md:flex-col bg-ibsilver-200">
          <div>
            <H2>Akademiet</H2>
            <P>
              Vi har vendt rekruttering på hovedet - Improve Business tilbyder
              løsninger, der både sikrer danske virksomheders konkurrenceevne i
              et marked i forandring og samtidig har en betydelig samfundsmæssig
              værdi for mennesker uden for arbejdsmarkedet.
            </P>
            <P>
              Med Academy vender vi rekruttering på hovedet og tilbyder landets
              jobcentre, virksomheder og borger en casebaseret tilgang til
              rekruttering. Vi matcher blindt på baggrund af motivation og
              parkerer alle fordomme i rekruttering.
            </P>
          </div>
          <Link href="/academy" className="md:mt-auto mt-4 w-fit h-fit">
            <Button variant="ghost" size="noPadding" hasArrow>
              Læs mere
            </Button>
          </Link>
        </SplitSectionChild>
      </SplitSection>
      <SplitSection>
        <SplitSectionChild img className="order-last">
          <Image
            src="/img/forside-man-with-coffee.jpeg"
            alt="mand sidder ved bord"
            width={768}
            height={750}
            className="md:w-full md:h-full max-h-[340px] object-cover md:max-h-none bg-ibsilver-400"
          />
        </SplitSectionChild>
        <SplitSectionChild className="md:flex md:flex-col bg-ibsilver-500 text-ibsilver-100">
          <div>
            <H2>Dynamisk, Effektivt & Visionært</H2>
            <P>
              Hos Improve Business stræber vi efter at være dynamiske, effektive
              og visionære i alt, hvad vi gør. Bæredygtighed er centralt og
              gennemgående i alt vi tilbyder, da det er vigtigt for os, at vi
              sammen skaber en positiv indvirkning på samfundet og miljøet.
            </P>
            <P>
              Dette indebærer bl.a. udvikling af målrettede strategier og
              handlingsplaner samt implementering i virksomhedens
              forretningsmodel og værdikæde.
            </P>
            <P>
              Hos Improve Business mener vi, at fremtidens sunde forretning er
              en bæredygtig forretning, og det er vores mål at hjælpe
              virksomheder med at opnå dette.
            </P>
          </div>
          <Link href="/academy" className="md:mt-auto w-fit h-fit mt-4">
            <Button variant="ghostWhite" size="noPadding" hasArrow>
              Se hvad vi tilbyder
            </Button>
          </Link>
        </SplitSectionChild>
      </SplitSection>
      <section>
        <div className="pb-8 md:pb-12 pt-[25px] md:pt-[40px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2>Hvad siger vores kunder?</H2>
          <TestimonialSlider />
        </div>
      </section>
      <section className="bg-ibsilver-200 w-screen">
        <div className="pb-8 md:pb-12 pt-[25px] md:pt-[40px] max-w-[1280px] w-full px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 mx-auto">
          <H2>Cases</H2>
          <CasesSection limitw />
        </div>
      </section>
    </>
  );
}
