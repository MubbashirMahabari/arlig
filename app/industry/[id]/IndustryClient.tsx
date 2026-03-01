"use client";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Approach from "./components/Approach";
import Results from "./components/Results";
import Success from "./components/Success";

export default function IndustryClient({ industry }: { industry: any }) {
    return (
        <div>
            <Hero industry={industry} />
            <Challenges />
            <Approach />
            <Results />
            <Success industry={industry} />
        </div>
    );
}
