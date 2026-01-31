import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import Reach from "./components/Reach";
import ConversationForm from "./components/ConversationForm";
import Operate from "./components/Operate";
import Background from "./components/Background";
import BuildSalesforce from "./components/BuildSalesforce";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Arlig. We are here to answer your questions and help you find the right solutions for your business needs.",
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
