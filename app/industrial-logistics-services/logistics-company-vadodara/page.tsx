import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "logistics company in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional logistics company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/logistics-company-vadodara" },
  openGraph: {
    title: "logistics company in Vadodara | VadodaraExperts",
    description: "Professional logistics company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/logistics-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="logistics-company-vadodara" />;
}
