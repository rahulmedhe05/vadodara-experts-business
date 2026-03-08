import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "MSDS preparation in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional msds preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/msds-preparation-vadodara" },
  openGraph: {
    title: "MSDS preparation in Vadodara | VadodaraExperts",
    description: "Professional msds preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/msds-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="msds-preparation-vadodara" />;
}
