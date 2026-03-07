import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "GI sheet roofing in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional gi sheet roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/gi-sheet-roofing-vadodara" },
  openGraph: {
    title: "GI sheet roofing in Vadodara | VadodaraExperts",
    description: "Professional gi sheet roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/gi-sheet-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gi-sheet-roofing-vadodara" />;
}
