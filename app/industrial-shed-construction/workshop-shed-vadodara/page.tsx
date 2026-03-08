import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "workshop shed in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional workshop shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/workshop-shed-vadodara" },
  openGraph: {
    title: "workshop shed in Vadodara | VadodaraExperts",
    description: "Professional workshop shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/workshop-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="workshop-shed-vadodara" />;
}
