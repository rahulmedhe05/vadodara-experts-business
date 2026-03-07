import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "rigid frame structure in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional rigid frame structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/rigid-frame-structure-vadodara" },
  openGraph: {
    title: "rigid frame structure in Vadodara | VadodaraExperts",
    description: "Professional rigid frame structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/rigid-frame-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rigid-frame-structure-vadodara" />;
}
