import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Voltage fluctuation fix in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional voltage fluctuation fix services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/voltage-fluctuation-fix-vadodara" },
  openGraph: {
    title: "Voltage fluctuation fix in Vadodara | VadodaraExperts",
    description: "Professional voltage fluctuation fix services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/voltage-fluctuation-fix-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="voltage-fluctuation-fix-vadodara" />;
}
