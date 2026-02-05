import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import ProjectBegins from "./components/ProjectBegins";
import Implementation from "./components/Implementation";
import Innovation from "./components/Innovation";
import Sustaining from "./components/Sustaining";
import Solution from "./components/Solution";
import Simplify from "./components/Simplify";

export const metadata: Metadata = {
  title: "Salesforce Consulting Services",
  description:
    "Comprehensive Salesforce Consulting Services: Implementation, Innovation, and Sustaining support for Sales, Service, and Data Cloud platforms.",
  keywords: ["Salesforce Consulting", "Salesforce Implementation", "Managed Services", "Salesforce Innovation"],
};

export default function Services() {
  return (
    <div>
      <Hero />
      <ProjectBegins />
      <Implementation />
      <Innovation />
      <Sustaining />
      <Solution />
      <Simplify />
    </div>
  );
}
