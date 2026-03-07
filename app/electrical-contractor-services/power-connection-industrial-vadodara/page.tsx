import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "power connection industrial in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional power connection industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/power-connection-industrial-vadodara" },
  openGraph: {
    title: "power connection industrial in Vadodara | VadodaraExperts",
    description: "Professional power connection industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/power-connection-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-connection-industrial-vadodara" />;
}
