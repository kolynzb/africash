"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useWindowScroll } from "@uidotdev/usehooks";
import { siteConfig } from "@/config/site";

export default function NavBar() {
  const [{ x, y }] = useWindowScroll();
  const isScrolled = (y as number) > 75;

  return (
    <nav
      className={cn(
        "fixed top-0 w-full flex justify-center bg-white/0 z-50 transition-all",
        {
          "border-b shadow-md border-gray-200/20 bg-white/10 backdrop-blur-xl":
            isScrolled,
        }
      )}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
          <input
            aria-hidden="true"
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="hidden peer"
          />
          <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
            <Link
              href="/"
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <Image
                src={siteConfig.logo.light}
                alt="Africash logo"
                width="100"
                height="100"
                className="w-24 object-contain"
              />
            </Link>

            <div className="relative flex items-center lg:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="hamburger"
                id="hamburger"
                className="relative  p-6 -mr-6"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="m-auto h-0.5 w-5 rounded bg-primary dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-primary dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="fixed z-10 inset-0 h-screen w-screen bg-opacity-5 bg-white/5 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/5"
          ></div>
          <div
            className={cn(
              "flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700",
              {
                "bg-black/90": isScrolled,
              }
            )}
          >
            <div className="font-extralight lg:pr-4 lg:w-auto w-full lg:pt-0 capitalize">
              <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                {siteConfig.navItems.map((link) => (
                  <NavLink href={link.href} key={link.name}>
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </div>

            <div className="mt-12 lg:mt-0 lg:flex  lg:flex-row items-center  justify-between space-y-4 lg:space-x-5 lg:space-y-0 ">
              <div onClick={() => console.log("")}>
                <Button
                  variant="outline"
                  className="w-full rounded-full px-6  bg-transparent text-accent hover:text-white border-accent border-2  py-2 md:py-1 lg:w-auto hover:scale-105 ease-in-out transition-all duration-300 "
                >
                  Login
                </Button>
              </div>
              <div onClick={() => console.log("")}>
                <Button className="w-full  rounded-full bg-accent hover:bg-white hover:text-accent hover:scale-105 ease-in-out transition-all duration-300 hover:border-2  border-accent px-6 py-2 md:py-1 lg:w-auto">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

type NavLInkProps = {
  children: React.ReactNode;
  href: string;
};

const NavLink: React.FC<NavLInkProps> = ({ children, href }) => {
  return (
    <li>
      <Link
        href={href}
        scroll={false}
        className="block md:px-4 hover:bg-gray-50/5 hover:text-gray-600 hover:backdrop-blur-lg rounded-full px-3 py-3 sm:py-1 transition-all duration-300 ease-in-out"
      >
        <span>{children}</span>
      </Link>
    </li>
  );
};
