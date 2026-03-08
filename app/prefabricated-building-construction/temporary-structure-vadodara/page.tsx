import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "temporary structure in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional temporary structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/temporary-structure-vadodara" },
  openGraph: {
    title: "temporary structure in Vadodara | VadodaraExperts",
    description: "Professional temporary structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/temporary-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="temporary-structure-vadodara" />;
}
