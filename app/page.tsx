import Link from "next/link";
import Home from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce Consulting Partner",
  description:
    "Scale your business with Arlig Technologies, a premium Salesforce Consulting Partner. Expert implementation, integration, and optimization for Sales, Service, and Data Cloud.",
  keywords: ["Salesforce Consulting Partner", "Salesforce Implementation", "Business Transformation", "Arlig Technologies"],
  openGraph: {
    title: "Salesforce Consulting Services & Digital Transformation | Arlig",
    description:
      "Scale your business with Arlig Technologies, a trusted Salesforce Consulting Partner. We deliver expert implementation, optimization, and AI solutions.",
  },
};

export default function Main() {
  return <Home />;
}
