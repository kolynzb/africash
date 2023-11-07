export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Africash",
  description: "Africa In One Financial Platform",
  logo: {
    dark: "/images/logos/logo.png",
    light: "/images/logos/logo.png",
  },
  url: "https://africash.vercel.app/",
  navItems: [
    {
      href: "/#about",
      name: "about",
    },
    {
      href: "/#features",
      name: "features",
    },
    {
      href: "/#blog",
      name: "blog",
    },
    {
      href: "/#contact",
      name: "contact",
    },
  ],
};
