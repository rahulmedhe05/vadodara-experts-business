import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "fire safety construction site in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional fire safety construction site services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/fire-safety-construction-site-vadodara" },
  openGraph: {
    title: "fire safety construction site in Vadodara | VadodaraExperts",
    description: "Professional fire safety construction site services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/fire-safety-construction-site-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-safety-construction-site-vadodara" />;
}
