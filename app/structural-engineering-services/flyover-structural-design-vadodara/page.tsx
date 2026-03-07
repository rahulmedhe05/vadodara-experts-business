import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Flyover structural design in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional flyover structural design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/flyover-structural-design-vadodara" },
  openGraph: {
    title: "Flyover structural design in Vadodara | VadodaraExperts",
    description: "Professional flyover structural design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/flyover-structural-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flyover-structural-design-vadodara" />;
}
