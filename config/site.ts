export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Africash",
  description: "Africa In One Financial Platform",
  logo: {
    dark: "/images/logos/dark.png",
    light: "/images/logos/light.png",
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
