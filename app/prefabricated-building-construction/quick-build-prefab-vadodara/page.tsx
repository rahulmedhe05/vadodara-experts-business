import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "quick build prefab in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional quick build prefab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/quick-build-prefab-vadodara" },
  openGraph: {
    title: "quick build prefab in Vadodara | VadodaraExperts",
    description: "Professional quick build prefab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/quick-build-prefab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="quick-build-prefab-vadodara" />;
}
