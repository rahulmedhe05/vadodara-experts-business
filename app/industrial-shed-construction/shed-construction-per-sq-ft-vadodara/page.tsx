import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "shed construction per sq ft in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional shed construction per sq ft services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/shed-construction-per-sq-ft-vadodara" },
  openGraph: {
    title: "shed construction per sq ft in Vadodara | VadodaraExperts",
    description: "Professional shed construction per sq ft services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/shed-construction-per-sq-ft-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shed-construction-per-sq-ft-vadodara" />;
}
