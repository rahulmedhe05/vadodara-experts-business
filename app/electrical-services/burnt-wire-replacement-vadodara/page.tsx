import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Burnt wire replacement in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional burnt wire replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/burnt-wire-replacement-vadodara" },
  openGraph: {
    title: "Burnt wire replacement in Vadodara | VadodaraExperts",
    description: "Professional burnt wire replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/burnt-wire-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="burnt-wire-replacement-vadodara" />;
}
