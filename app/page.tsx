import Image from "next/image";
import Home from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Arlig - Your trusted partner for innovative solutions and exceptional services.",
  openGraph: {
    title: "Arlig - Home",
    description:
      "Welcome to Arlig - Your trusted partner for innovative solutions and exceptional services.",
  },
};

export default function Main() {
  return <Home />;
}
