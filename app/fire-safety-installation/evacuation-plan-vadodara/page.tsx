import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "evacuation plan in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional evacuation plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/evacuation-plan-vadodara" },
  openGraph: {
    title: "evacuation plan in Vadodara | VadodaraExperts",
    description: "Professional evacuation plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/evacuation-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="evacuation-plan-vadodara" />;
}
