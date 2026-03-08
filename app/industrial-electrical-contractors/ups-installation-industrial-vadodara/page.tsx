import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "UPS installation industrial in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional ups installation industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/ups-installation-industrial-vadodara" },
  openGraph: {
    title: "UPS installation industrial in Vadodara | VadodaraExperts",
    description: "Professional ups installation industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/ups-installation-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ups-installation-industrial-vadodara" />;
}
