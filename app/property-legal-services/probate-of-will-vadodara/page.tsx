import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Probate of will in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional probate of will services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/probate-of-will-vadodara" },
  openGraph: {
    title: "Probate of will in Vadodara | VadodaraExperts",
    description: "Professional probate of will services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/probate-of-will-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="probate-of-will-vadodara" />;
}
