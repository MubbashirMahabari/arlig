import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Beyond from "./components/Beyond";
import HireForm from "./components/HireForm";
import Connect from "./components/Connect";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Arlig team. Explore career opportunities and be part of an innovative and growing company dedicated to excellence.",
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
