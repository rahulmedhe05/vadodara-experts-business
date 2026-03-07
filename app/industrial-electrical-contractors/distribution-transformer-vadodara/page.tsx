import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "distribution transformer in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional distribution transformer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/distribution-transformer-vadodara" },
  openGraph: {
    title: "distribution transformer in Vadodara | VadodaraExperts",
    description: "Professional distribution transformer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/distribution-transformer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="distribution-transformer-vadodara" />;
}
