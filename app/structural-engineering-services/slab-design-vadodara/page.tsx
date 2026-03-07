import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Slab design in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional slab design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/slab-design-vadodara" },
  openGraph: {
    title: "Slab design in Vadodara | VadodaraExperts",
    description: "Professional slab design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/slab-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="slab-design-vadodara" />;
}
