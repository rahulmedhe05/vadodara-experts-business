import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "electrical breakdown service in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional electrical breakdown service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/electrical-breakdown-service-vadodara" },
  openGraph: {
    title: "electrical breakdown service in Vadodara | VadodaraExperts",
    description: "Professional electrical breakdown service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/electrical-breakdown-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-breakdown-service-vadodara" />;
}
