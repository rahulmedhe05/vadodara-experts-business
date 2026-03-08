import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "HT metering in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional ht metering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/ht-metering-vadodara" },
  openGraph: {
    title: "HT metering in Vadodara | VadodaraExperts",
    description: "Professional ht metering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/ht-metering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ht-metering-vadodara" />;
}
