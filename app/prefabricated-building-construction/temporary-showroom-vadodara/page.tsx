import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "temporary showroom in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional temporary showroom services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/temporary-showroom-vadodara" },
  openGraph: {
    title: "temporary showroom in Vadodara | VadodaraExperts",
    description: "Professional temporary showroom services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/temporary-showroom-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="temporary-showroom-vadodara" />;
}
