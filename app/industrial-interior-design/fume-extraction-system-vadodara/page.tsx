import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "fume extraction system in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional fume extraction system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/fume-extraction-system-vadodara" },
  openGraph: {
    title: "fume extraction system in Vadodara | VadodaraExperts",
    description: "Professional fume extraction system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/fume-extraction-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fume-extraction-system-vadodara" />;
}
