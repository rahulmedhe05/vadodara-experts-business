import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "concrete shed in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional concrete shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/concrete-shed-vadodara" },
  openGraph: {
    title: "concrete shed in Vadodara | VadodaraExperts",
    description: "Professional concrete shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/concrete-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concrete-shed-vadodara" />;
}
