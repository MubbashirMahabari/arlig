"use client";
import { useParams } from "next/navigation";
import industryData from "@/data/industryData";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Approach from "./components/Approach";
import Results from "./components/Results";
import Success from "./components/Success";

export default function Page() {
  const params = useParams();
  const rawId = params?.id as string | undefined;
  const parsed = rawId
    ? parseInt(Array.isArray(rawId) ? rawId[0] : rawId, 10)
    : NaN;

  if (Number.isNaN(parsed)) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Invalid industry id</h2>
      </div>
    );
  }

  const industry = industryData.find((b) => b.id === parsed);
  if (!industry) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Industry not found</h2>
      </div>
    );
  }

  return (
    <div>
     <Hero industry={industry}/>
     <Challenges/>
     <Approach/>
     <Results/>
     <Success industry={industry}/>
    </div>
  );
}
