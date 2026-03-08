import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Pre surgery fitness in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional pre surgery fitness services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/pre-surgery-fitness-vadodara" },
  openGraph: {
    title: "Pre surgery fitness in Vadodara | VadodaraExperts",
    description: "Professional pre surgery fitness services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/pre-surgery-fitness-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-surgery-fitness-vadodara" />;
}
