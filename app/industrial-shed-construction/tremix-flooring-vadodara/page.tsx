import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "tremix flooring in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional tremix flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/tremix-flooring-vadodara" },
  openGraph: {
    title: "tremix flooring in Vadodara | VadodaraExperts",
    description: "Professional tremix flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/tremix-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tremix-flooring-vadodara" />;
}
