import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "plastic crate industrial in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional plastic crate industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/plastic-crate-industrial-vadodara" },
  openGraph: {
    title: "plastic crate industrial in Vadodara | VadodaraExperts",
    description: "Professional plastic crate industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/plastic-crate-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plastic-crate-industrial-vadodara" />;
}
