import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import IndustryItems from "./components/IndustryItems";
import Connect from "./components/Connect";


export const metadata: Metadata = {
  title: "Industries",
  description:
    "Discover the industries Arlig serves. We provide specialized solutions for various sectors including technology, healthcare, and finance.",
};

export default function Industry() {
  return (
    <div>
      <Hero />
      <IndustryItems />
      <Connect />
    </div>
  );
}
