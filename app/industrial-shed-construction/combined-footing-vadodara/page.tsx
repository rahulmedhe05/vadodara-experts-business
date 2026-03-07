import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "combined footing in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional combined footing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/combined-footing-vadodara" },
  openGraph: {
    title: "combined footing in Vadodara | VadodaraExperts",
    description: "Professional combined footing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/combined-footing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="combined-footing-vadodara" />;
}
