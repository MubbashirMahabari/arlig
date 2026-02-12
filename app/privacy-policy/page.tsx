import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Arlig Technologies",
    description: "Privacy Policy for Arlig Technologies. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-900">Privacy Policy</h1>
            <p className="text-slate-600 mb-8 text-lg">
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg text-slate-700 max-w-none">
                <p>
                    At Arlig Technologies, accessible from arlig.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Arlig Technologies and how we use it.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Information We Collect</h2>
                <p>
                    We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">How We Use Your Information</h2>
                <p>
                    We use the information we collect in various ways, including to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Cookies and Web Beacons</h2>
                <p>
                    Like any other website, Arlig Technologies uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Third Party Privacy Policies</h2>
                <p>
                    Arlig Technologies's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>
            </div>
        </div>
    );
}
