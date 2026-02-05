import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import Reach from "./components/Reach";
import ConversationForm from "./components/ConversationForm";
import Operate from "./components/Operate";
import Background from "./components/Background";
import BuildSalesforce from "./components/BuildSalesforce";

export const metadata: Metadata = {
  title: "Contact Arlig Technologies | Salesforce Consultation",
  description:
    "Book a complimentary strategy session with our Salesforce experts. Solutions for implementation, optimization, and managed services.",
};

export default function Contact() {
  return (
    <div className="">
      <Hero />
      <Reach />
      <ConversationForm />
      <Operate />
      <Background />
      <BuildSalesforce />
    </div>
  );
}
