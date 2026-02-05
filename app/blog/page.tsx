import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import Exprience from "./components/Exprience";
import Advantage from "./components/Advantage";

export const metadata: Metadata = {
  title: "Salesforce Insights & Case Studies | Arlig Resources",
  description:
    "Expert insights on Salesforce trends, successful implementation case studies, and digital transformation guides.",
};

export default function Blog() {
  return (
    <div>
      <Hero />
      <Exprience />
      <Advantage />
    </div>
  );
}
