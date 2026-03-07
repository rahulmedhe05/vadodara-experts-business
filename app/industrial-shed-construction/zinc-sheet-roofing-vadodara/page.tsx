import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "zinc sheet roofing in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional zinc sheet roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/zinc-sheet-roofing-vadodara" },
  openGraph: {
    title: "zinc sheet roofing in Vadodara | VadodaraExperts",
    description: "Professional zinc sheet roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/zinc-sheet-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zinc-sheet-roofing-vadodara" />;
}
