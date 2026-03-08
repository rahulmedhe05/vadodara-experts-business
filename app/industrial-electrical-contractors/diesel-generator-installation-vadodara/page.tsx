import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "diesel generator installation in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional diesel generator installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/diesel-generator-installation-vadodara" },
  openGraph: {
    title: "diesel generator installation in Vadodara | VadodaraExperts",
    description: "Professional diesel generator installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/diesel-generator-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="diesel-generator-installation-vadodara" />;
}
