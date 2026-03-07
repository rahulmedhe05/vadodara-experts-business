import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "rent control tribunal in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional rent control tribunal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/rent-control-tribunal-vadodara" },
  openGraph: {
    title: "rent control tribunal in Vadodara | VadodaraExperts",
    description: "Professional rent control tribunal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/rent-control-tribunal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rent-control-tribunal-vadodara" />;
}
