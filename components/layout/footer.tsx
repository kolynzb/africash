import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-10 text-xs">
      <div className="max-w-screen-xl px-4  sm:grid md:grid-cols-5 sm:grid-cols-2 mx-auto ">
        <Link href="/" className="p-5">
          <Image
            src={siteConfig.logo.dark}
            alt="Africash logo"
            width="100"
            height="100"
            className="w-24 object-contain"
          />
        </Link>
        <div className="p-5">
          <div className="text-sm    font-semibold">Company</div>
          <a className="my-3 block" href="/#">
            About us
          </a>
          <a className="my-3 block" href="/#">
            Blog
          </a>
          <a className="my-3 block" href="/#">
            Careers
          </a>
          <a className="my-3 block" href="/#">
            Community
            {/* <span className="text-teal-600 text-xs p-1">New</span> */}
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm font-semibold">Features</div>
          <a className="my-3 block" href="/#">
            With Africa
          </a>
          <a className="my-3 block" href="/#">
            International
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm font-semibold">Help</div>
          <a className="my-3 block" href="/#">
            Contact
          </a>
          <a className="my-3 block" href="/#">
            FAQs
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm font-semibold">Legal</div>
          <a className="my-3 block" href="/#">
            Terms & Conditions
          </a>
          <a className="my-3 block" href="/#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
