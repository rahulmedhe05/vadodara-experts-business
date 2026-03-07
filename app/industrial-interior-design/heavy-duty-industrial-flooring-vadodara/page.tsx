import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "heavy duty industrial flooring in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional heavy duty industrial flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/heavy-duty-industrial-flooring-vadodara" },
  openGraph: {
    title: "heavy duty industrial flooring in Vadodara | VadodaraExperts",
    description: "Professional heavy duty industrial flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/heavy-duty-industrial-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heavy-duty-industrial-flooring-vadodara" />;
}
