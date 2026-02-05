import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Beyond from "./components/Beyond";
import HireForm from "./components/HireForm";
import Connect from "./components/Connect";

export const metadata: Metadata = {
  title: "Careers at Arlig Technologies | Salesforce Jobs",
  description:
    "Join a top-tier Salesforce Consulting firm. We're hiring Architects, Developers, and Consultants to build the future of enterprise tech.",
};

export default function Career() {
  return (
    <div className="">
      <Hero />
      <Work />
      <Beyond />
      <HireForm />
      <Connect />
    </div>
  );
}
