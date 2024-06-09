import SplitSection from "./splitSection";
import SplitSectionChild from "./splitSectionChild";
import { supabase } from "@/lib/supabaseclient";
import { Button } from "./ui/button";
import { H2, P } from "./ui/fonts";
import Icon from "./ui/icon";
import Link from "next/link";
import he from "he";

export default async function YdelseSection({ parent, title }) {
  const { data, error } = await supabase
    .from("ib-product-cards_v2")
    .select("*")
    .eq("parent", parent);

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const slugChildrenData = data;

  return (
    <>
      <SplitSection>
        <SplitSectionChild className="bg-ibsilver-500 text-ibsilver-100">
          <div className="flex flex-col gap-8 md:gap-20">
            {slugChildrenData
              .slice() // Create a shallow copy of the array to avoid mutating the original
              .sort((a, b) => a.id - b.id) // Sort the array based on the id property
              .map((child) => (
                <div key={child.icon}>
                  <H2>{he.decode(child.title)}</H2>
                  {child.content.map((content, index) => (
                    <P key={index}>{content.text}</P>
                  ))}
                  <Link href={`/consulting/${child.url}`}>
                    <Button variant="ghost" size="noPadding" hasArrow>
                      Læs mere
                    </Button>
                  </Link>
                  <div className="flex justify-center pb-7 pt-5">
                    <Icon large iconVersion={child.icon} />
                  </div>
                </div>
              ))}
          </div>
        </SplitSectionChild>
        <SplitSectionChild
          sticky
          className="bg-ibgreen-400 flex items-center max-md:hidden"
        >
          <h2 className="font-medium text-base md:text-3xl">
            {title}s-
            <br />
            <span className="font-bold text-[32px]/[1.4] pb-4 sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl">
              ydelser
            </span>
          </h2>
        </SplitSectionChild>
      </SplitSection>
    </>
  );
}
