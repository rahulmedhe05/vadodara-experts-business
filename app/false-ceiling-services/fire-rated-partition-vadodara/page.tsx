import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Fire rated partition in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional fire rated partition services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/fire-rated-partition-vadodara" },
  openGraph: {
    title: "Fire rated partition in Vadodara | VadodaraExperts",
    description: "Professional fire rated partition services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/fire-rated-partition-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-rated-partition-vadodara" />;
}
