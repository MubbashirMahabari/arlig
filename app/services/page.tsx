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
  title: "Our Services",
  description:
    "Explore Arlig's wide range of services including implementation, innovation, and sustaining solutions designed to help your business grow.",
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
