import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "HT power connection in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional ht power connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/ht-power-connection-vadodara" },
  openGraph: {
    title: "HT power connection in Vadodara | VadodaraExperts",
    description: "Professional ht power connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/ht-power-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ht-power-connection-vadodara" />;
}
