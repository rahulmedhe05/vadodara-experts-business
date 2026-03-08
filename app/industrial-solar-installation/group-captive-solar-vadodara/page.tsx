import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "group captive solar in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional group captive solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/group-captive-solar-vadodara" },
  openGraph: {
    title: "group captive solar in Vadodara | VadodaraExperts",
    description: "Professional group captive solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/group-captive-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="group-captive-solar-vadodara" />;
}
