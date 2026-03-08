import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "HIRA study in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional hira study services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/hira-study-vadodara" },
  openGraph: {
    title: "HIRA study in Vadodara | VadodaraExperts",
    description: "Professional hira study services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/hira-study-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hira-study-vadodara" />;
}
