"use client";
import { supabase } from "../lib/supabaseclient";
import EmployeeCard from "./ui/employeeCard";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutCarousel({ type }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [employees, setEmployees] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("ib-medarbejdere")
          .select("*")
          .eq("type", type);

        if (error) throw error;

        setEmployees(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [type]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !employees || employees.length === 0) {
    return <div>Error: Data not found</div>;
  }

  return (
    <>
      <Carousel
        className="relative mx-auto xl:max-w-[1280px] px-2.5 md:px-3.5 lg:px-8"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {employees.map((employee) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
              key={employee.id}
            >
              <EmployeeCard
                fullname={employee.fullname}
                title={employee.title}
                company={employee.company}
                type={employee.type}
                img={employee.img}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-10px]  min-[500px]:left-0" />
        <CarouselNext className="right-[-10px] min-[500px]:right-0" />
      </Carousel>
    </>
  );
}
