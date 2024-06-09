"use client";
import { useForm, getValues, useWatch, Control } from "react-hook-form";
import { useState, useEffect } from "react";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { supabase } from "../lib/supabaseclient";
import CheckboxTile from "./ui/checkboxtile";
import FormError from "./ui/formError";
import { P } from "./ui/fonts";
import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const areas = [
  {
    name: "Innovation og skalering",
    key: "innovation",
  },
  {
    name: "Dokumentation",
    key: "dokumentation",
  },
  {
    name: "Forretningsudvikling",
    key: "forretningsudvikling",
  },
  {
    name: "Kommunikation",
    key: "kommunikation",
  },
  {
    name: "Forandring",
    key: "forandring",
  },
  {
    name: "Andet",
    key: "andet",
  },
];

export default function FormSetup() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const descriptionLength = useWatch({
    control,
    name: "description",
    defaultValue: "",
  });

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (key, isChecked) => {
    setCheckedItems({ ...checkedItems, [key]: isChecked });
  };

  const [submitting, setSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mail, setMail] = useState("");

  useEffect(() => {
    if (formSubmitted) {
      window.scrollTo(0, 0);
    }
  }, [formSubmitted]);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true); // Set submitting state to true
      setMail(data.email);

      // Send form data to SupaBase
      const { data: formData, error } = await supabase
        .from("ib-contact-form")
        .insert([
          {
            // Map form data to your table columns
            name: data.name,
            email: data.email,
            phone: data.phone,
            description: data.description,
            area: Object.keys(checkedItems)
              .filter((key) => checkedItems[key])
              .join(", "),
            // Add other columns as needed
          },
        ]);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    } finally {
      setSubmitting(false);
      setFormSubmitted(true); // Reset submitting state
    }
  };

  return (
    <div className="border-solid border-ibsilver-500 border-t pt-5">
      <Form>
        {formSubmitted ? (
          <>
            <h2 className="font-bold text-2xl pb-4">
              Tak for din henvendelse!
            </h2>
            <P>
              Vi har modtaget din information og kontakter dig inden for 1
              hverdag. Du har modtaget en bekræftelse på
              <span className="text-ibgreen-400">{mail}</span>
            </P>
            <Link href="/">
              <Button>Tilbage til forsiden</Button>
            </Link>
          </>
        ) : (
          <>
            <P>
              Vi er klar til at hjælpe jer. Udfyld formularen og vi vender
              tilbage snarest!
            </P>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <fieldset>
                <legend className="font-poppins text-ibsilver-600 text-[17px]">
                  Hvad kan vi hjælpe dig med?
                </legend>
                <div className="mt-3.5 flex gap-2.5 flex-wrap">
                  {areas.map((area) => (
                    <CheckboxTile
                      {...register(area.name)}
                      key={area.key}
                      checked={checkedItems[area.key] || false}
                      onChange={(isChecked) =>
                        handleCheckboxChange(area.key, isChecked)
                      }
                    >
                      {area.name}
                    </CheckboxTile>
                  ))}
                </div>
              </fieldset>
              <div className="sm:flex gap-y-5 gap-x-2.5 sm:flex-wrap min-[1500px]:grid min-[1500px]:grid-cols-3">
                <div className="w-full">
                  <Label htmlFor="name">Navn*</Label>
                  <Input
                    id="name"
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                    className={`mt-1.5 ${
                      errors.name
                        ? "border-ibred-400 border-2"
                        : "border-ibsilver-500"
                    }`}
                  />
                  {errors.name?.type === "required" && (
                    <FormError>Indtast navn</FormError>
                  )}
                </div>
                <div className="flex gap-y-5 flex-col gap-x-2.5 sm:flex-row sm:flex-wrap w-full min-[1018px]:grid min-[1018px]:grid-cols-2 min-[1500px]:col-span-2">
                  <div className="w-full">
                    <Label htmlFor="email">E-mail*</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: true })}
                      aria-invalid={errors.email ? "true" : "false"}
                      className={`mt-1.5 ${
                        errors.email
                          ? "border-ibred-400 border-2"
                          : "border-ibsilver-500"
                      }`}
                    />
                    {errors.email?.type === "required" && (
                      <FormError>Indtast korrekt e-mail</FormError>
                    )}
                  </div>
                  <div className="w-full">
                    <Label htmlFor="phone">Telefonnummer*</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone", {
                        required: "Telefonnummer er påkrævet",
                        minLength: {
                          value: 8,
                          message: "Skriv mindst 8 tegn",
                        },
                      })}
                      aria-invalid={errors.phone ? "true" : "false"}
                      className={`mt-1.5 ${
                        errors.phone
                          ? "border-ibred-400 border-2"
                          : "border-ibsilver-500"
                      }`}
                    />
                    {errors.phone && (
                      <FormError>{errors.phone.message}</FormError>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Label htmlFor="description">Besked*</Label>
                  <Popover>
                    <PopoverTrigger>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        viewBox="0 -960 960 960"
                        width="20px"
                        className="fill-ibsilver-300"
                      >
                        <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                      </svg>
                    </PopoverTrigger>
                    <PopoverContent className="ml-2.5 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10">
                      <p className="text-pretty text-xs">
                        Fortæl om din virksomhed og de udfordringer I står
                        overfor. Tilføj alle de detaljer, som du tænker kan være
                        relevant for os.
                      </p>
                    </PopoverContent>
                  </Popover>
                </div>
                <Textarea
                  className={`resize-none h-32 mt-1.5 ${
                    errors.description
                      ? "border-ibred-400 border-2"
                      : "border-ibsilver-500"
                  } 	`}
                  id="description"
                  resize-none
                  {...register("description", {
                    required: "Skriv en besked",
                    minLength: {
                      value: 5,
                      message: "Beskeden er for kort",
                    },
                    maxLength: {
                      value: 500,
                      message: "Beskeden er for lang",
                    },
                  })}
                />
                <div className="flex">
                  {errors.description && (
                    <FormError>{errors.description.message}</FormError>
                  )}
                  <p
                    className={`ml-auto text-xs  mt-2 ${
                      descriptionLength.length > 500
                        ? "text-ibred-400"
                        : "text-ibsilver-400"
                    }`}
                  >
                    {descriptionLength.length}/500
                  </p>
                </div>
              </div>
              {/* {errors.name && <span>This field is required</span>} */}
              <div className="mt-4">
                <Button hasArrow type="submit" disabled={submitting} tabindex>
                  {submitting ? "Sender..." : "Send"}
                </Button>
              </div>
            </form>
          </>
        )}
      </Form>
    </div>
  );
}
