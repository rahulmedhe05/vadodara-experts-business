import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Multi storey building design in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional multi storey building design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/multi-storey-building-design-vadodara" },
  openGraph: {
    title: "Multi storey building design in Vadodara | VadodaraExperts",
    description: "Professional multi storey building design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/multi-storey-building-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-storey-building-design-vadodara" />;
}
