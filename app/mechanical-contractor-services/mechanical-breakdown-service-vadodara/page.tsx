import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "mechanical breakdown service in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional mechanical breakdown service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/mechanical-breakdown-service-vadodara" },
  openGraph: {
    title: "mechanical breakdown service in Vadodara | VadodaraExperts",
    description: "Professional mechanical breakdown service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/mechanical-breakdown-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-breakdown-service-vadodara" />;
}
