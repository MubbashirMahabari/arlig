export type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Resources",
    children: [
      { label: "Blogs", href: "/blog" },
      { label: "Industry Solutions", href: "/industry" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
