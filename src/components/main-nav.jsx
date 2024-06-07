"use client";

import MenuItem from "./ui/menu-item";
import Link from "next/link";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import he from "he";

function MainNav({ menuItems }) {
  const [openAccordions, setOpenAccordions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    if (isOpen) {
      setOpenAccordions([]);
    }
    setIsOpen((prevState) => !prevState);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDrawer();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Prevent vertical scrolling when the drawer is open
      document.body.style.overflowY = "hidden";
    } else {
      // Re-enable vertical scrolling when the drawer is closed
      document.body.style.overflowY = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  const pathname = usePathname();

  return (
    <>
      <NavigationMenu className="w-full flex justify-between bg-ibsilver-500 px-5 py-3 md:px-7 md:py-5">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width="144" height="39" />
        </Link>
        <NavigationMenuList className="hidden my-auto text-4xl md:flex md:flex-row md:gap-7 md:text-lg">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <MenuItem
                linkref="/consulting"
                className={pathname === "/consulting" ? "text-ibgreen-400" : ""}
              >
                Consulting
              </MenuItem>
            </NavigationMenuTrigger>
            <NavigationMenuContent className=" bg-ibsilver-600 flex justify-center">
              <nav className="flex flex-wrap justify-between gap-4 text-ibsilver-100 px-10 py-11 w-full max-w-[1280px]">
                {menuItems
                  .filter((menuItem) => menuItem.parent === "consulting")
                  .sort((a, b) => a.id - b.id)
                  .map((menuItem) => {
                    const subMenuItems = menuItems.filter(
                      (subMenuItem) => subMenuItem.parent === menuItem.icon
                    );
                    return (
                      <div key={menuItem.icon} className="flex flex-col gap-8">
                        <p className="font-poppins text-lg">
                          <MenuItem
                            linkref={`/consulting/${menuItem.url}`}
                            className={
                              pathname === `/consulting/${menuItem.url}`
                                ? "text-ibgreen-400"
                                : ""
                            }
                          >
                            {he.decode(menuItem.title)}
                          </MenuItem>
                        </p>
                        <ul className="flex flex-col gap-4 text-sm">
                          {subMenuItems.map((subMenuItem) => (
                            <li key={subMenuItem.icon}>
                              <MenuItem
                                linkref={`/consulting/${subMenuItem.url}`}
                                className={
                                  pathname === `/consulting/${subMenuItem.url}`
                                    ? "text-ibgreen-400"
                                    : ""
                                }
                              >
                                {he.decode(subMenuItem.title)}
                              </MenuItem>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
              </nav>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <MenuItem
                linkref="/academy"
                className={pathname === "/academy" ? "text-ibgreen-400" : ""}
              >
                Academy
              </MenuItem>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <MenuItem
                linkref="/cases"
                className={pathname === "/cases" ? "text-ibgreen-400" : ""}
              >
                Cases
              </MenuItem>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <MenuItem
                linkref="/om-os"
                className={pathname === "/om-os" ? "text-ibgreen-400" : ""}
              >
                Om os
              </MenuItem>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <MenuItem
                linkref="/kontakt"
                className={pathname === "/kontakt" ? "text-ibgreen-400" : ""}
              >
                Kontakt
              </MenuItem>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="flex self-center md:hidden">
          <svg
            onKeyDown={handleKeyDown}
            tabIndex={0}
            onClick={toggleDrawer}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="28"
            viewBox="0 0 34 28"
            fill="none"
          >
            <g>
              <path
                d="M2 2H31"
                className="stroke-ibsilver-100"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M2 13H31"
                className="stroke-ibsilver-100"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M2 24H31"
                className="stroke-ibsilver-100"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          </svg>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            style={{ width: "100vw", height: "100%", overflow: "auto" }}
          >
            <div className="flex flex-col min-h-[100vh] bg-ibsilver-500 text-ibsilver-100">
              <div className="flex m-6 justify-end">
                <svg
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  onClick={toggleDrawer}
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M2.5 26L26.5 2"
                    className="stroke-ibsilver-100"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 2L26 26"
                    className="stroke-ibsilver-100"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col mt-12">
                <Accordion
                  type="multiple"
                  className="w-full"
                  value={openAccordions}
                  onValueChange={setOpenAccordions}
                >
                  <AccordionItem value="consulting" className="border-none">
                    <AccordionTrigger
                      link="/consulting"
                      toggleDrawer={toggleDrawer}
                      setOpenAccordions={setOpenAccordions}
                      className={`p-4 border-t-2 border-b border-ibsilver-400 text-2xl font-semibold ${
                        pathname === `/consulting` ? "text-ibgreen-400" : ""
                      }`}
                    >
                      Consulting
                    </AccordionTrigger>
                    <AccordionContent className="p-0 bg-ibsilver-600">
                      <Accordion type="single">
                        <ul className="flex flex-col text-sm">
                          {menuItems
                            .filter(
                              (menuItem) => menuItem.parent === "consulting"
                            )
                            .sort((a, b) => a.id - b.id)
                            .map((menuItem) => (
                              <AccordionItem
                                key={menuItem.icon}
                                value={menuItem.icon}
                                className="border-b-0 border-t border-ibsilver-400 p-4"
                              >
                                <AccordionTrigger
                                  link={`/consulting/${menuItem.url}`}
                                  toggleDrawer={toggleDrawer}
                                  setOpenAccordions={setOpenAccordions}
                                  className={`p-2 text-lg ${
                                    pathname === `/consulting/${menuItem.url}`
                                      ? "text-ibgreen-400"
                                      : ""
                                  }`}
                                >
                                  {he.decode(menuItem.title)}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="flex flex-col text-sm">
                                    {menuItems
                                      .filter(
                                        (subItem) =>
                                          subItem.parent === menuItem.icon
                                      )
                                      .sort((a, b) => a.id - b.id)
                                      .map((subItem) => (
                                        <li key={subItem.icon}>
                                          <Link
                                            onClick={toggleDrawer}
                                            href={`/consulting/${subItem.url}`}
                                            className={`px-4 py-3 text-base ${
                                              pathname ===
                                              `/consulting/${subItem.url}`
                                                ? "text-ibgreen-400"
                                                : ""
                                            }`}
                                          >
                                            {he.decode(subItem.title)}
                                          </Link>
                                        </li>
                                      ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                        </ul>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="w-full">
                  <Link
                    onClick={toggleDrawer}
                    href="/academy"
                    className={`p-4 hover:underline border-t-2 border-ibsilver-400 text-2xl font-semibold ${
                      pathname === `/academy` ? "text-ibgreen-400" : ""
                    }`}
                  >
                    Academy
                  </Link>
                </div>
                <div className="w-full">
                  <Link
                    onClick={toggleDrawer}
                    href="/cases"
                    className={`p-4 hover:underline border-t-2 border-ibsilver-400 text-2xl font-semibold ${
                      pathname === `/cases` ? "text-ibgreen-400" : ""
                    }`}
                  >
                    Cases
                  </Link>
                </div>
                <div className="w-full">
                  <Link
                    onClick={toggleDrawer}
                    href="/om-os"
                    className={`p-4 hover:underline border-t-2 border-ibsilver-400 text-2xl font-semibold ${
                      pathname === `/om-os` ? "text-ibgreen-400" : ""
                    }`}
                  >
                    Om os
                  </Link>
                </div>
                <div className="w-full">
                  <Link
                    onClick={toggleDrawer}
                    href="/kontakt"
                    className={`p-4 hover:underline border-t-2 border-ibsilver-400 text-2xl font-semibold ${
                      pathname === `/kontakt` ? "text-ibgreen-400" : ""
                    }`}
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </NavigationMenu>
    </>
  );
}

export default MainNav;
