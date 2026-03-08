import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "shed ventilation in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional shed ventilation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/shed-ventilation-vadodara" },
  openGraph: {
    title: "shed ventilation in Vadodara | VadodaraExperts",
    description: "Professional shed ventilation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/shed-ventilation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shed-ventilation-vadodara" />;
}
