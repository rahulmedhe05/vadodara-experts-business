import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "servo stabilizer industrial in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional servo stabilizer industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/servo-stabilizer-industrial-vadodara" },
  openGraph: {
    title: "servo stabilizer industrial in Vadodara | VadodaraExperts",
    description: "Professional servo stabilizer industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/servo-stabilizer-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="servo-stabilizer-industrial-vadodara" />;
}
