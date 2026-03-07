import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "VDF flooring in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional vdf flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/vdf-flooring-vadodara" },
  openGraph: {
    title: "VDF flooring in Vadodara | VadodaraExperts",
    description: "Professional vdf flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/vdf-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vdf-flooring-vadodara" />;
}
