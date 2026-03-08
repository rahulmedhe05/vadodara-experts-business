import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "porta cabin manufacturer in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional porta cabin manufacturer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/porta-cabin-manufacturer-vadodara" },
  openGraph: {
    title: "porta cabin manufacturer in Vadodara | VadodaraExperts",
    description: "Professional porta cabin manufacturer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/porta-cabin-manufacturer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="porta-cabin-manufacturer-vadodara" />;
}
