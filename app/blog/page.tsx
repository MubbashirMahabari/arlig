import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import Exprience from "./components/Exprience";
import Advantage from "./components/Advantage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest insights, trends, and updates from Arlig. Stay informed about the industry and our latest achievements.",
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
