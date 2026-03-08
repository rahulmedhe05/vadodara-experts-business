import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "glass packaging industrial in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional glass packaging industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/glass-packaging-industrial-vadodara" },
  openGraph: {
    title: "glass packaging industrial in Vadodara | VadodaraExperts",
    description: "Professional glass packaging industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/glass-packaging-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-packaging-industrial-vadodara" />;
}
