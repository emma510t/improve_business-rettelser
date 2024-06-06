import PageTagBreadcrumb from "@/components/ui/pageTagBreadcrumb";
import { H1, H3, P } from "@/components/ui/fonts";

export const metadata = {
  title: "Academy",
};

export default function academy() {
  return (
    <>
      <div className="bg-ibsilver-600 pb-8 md:pb-16 pt-[25px] md:pt-[40px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <PageTagBreadcrumb currentPage="Academy" dark />
        <H1 className="text-ibsilver-100">Welcome to Improve Academy</H1>
      </div>
      <section className="flex items-center flex-col py-16 md:py-28 px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <H3 className="text-ibsilver-600">Improve Academy is under construction...</H3>
        <P>See you soon!</P>
      </section>
    </>
  );
}
