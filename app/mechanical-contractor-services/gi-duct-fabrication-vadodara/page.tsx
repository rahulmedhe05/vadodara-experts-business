import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "GI duct fabrication in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional gi duct fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/gi-duct-fabrication-vadodara" },
  openGraph: {
    title: "GI duct fabrication in Vadodara | VadodaraExperts",
    description: "Professional gi duct fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/gi-duct-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gi-duct-fabrication-vadodara" />;
}
