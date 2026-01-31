import Image from "next/image";
import { Metadata } from "next";
import Hero from "./components/Hero";
import ClientCarousel from "./components/ClientCarousel";
import Expertise from "./components/Expertise";
import SalesforceProduct from "./components/SalesforceProduct";
import Client from "./components/Client";
import ChooseArlig from "./components/ChooseArlig";
import LeaderTeam from "./components/LeaderTeam";
import Experience from "./components/Experience";
import Connect from "./components/Connect";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Arlig is your trusted partner for innovative Salesforce solutions. Transform your business with our expert services.",
};

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ClientCarousel />
      <Expertise />
      <SalesforceProduct />
      <ChooseArlig />
      <Client />
      <LeaderTeam />
      <Experience />
      <Connect />
    </div>
  );
}
