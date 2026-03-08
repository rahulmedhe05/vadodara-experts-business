import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "wall cutting in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional wall cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/wall-cutting-vadodara" },
  openGraph: {
    title: "wall cutting in Vadodara | VadodaraExperts",
    description: "Professional wall cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/wall-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wall-cutting-vadodara" />;
}
