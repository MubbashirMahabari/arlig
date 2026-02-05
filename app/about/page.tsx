import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Belief from "./components/Belief";
import Action from "./components/Action";
import VisionMission from "./components/VisionMission";
import Global from "./components/Global";
import Defines from "./components/Defines";
import Promise from "./components/Promise";

export const metadata: Metadata = {
  title: "About Arlig Technologies | Salesforce Consulting Experts",
  description:
    "Trusted Salesforce Partners. We combine deep technical expertise with industry strategy to deliver lasting business value.",
};

export default function About() {
  return (
    <div>
      <Hero />
      <OurStory />
      <Belief />
      <Action />
      <VisionMission />
      <Global />
      <Defines />
      <Promise />
    </div>
  );
}
