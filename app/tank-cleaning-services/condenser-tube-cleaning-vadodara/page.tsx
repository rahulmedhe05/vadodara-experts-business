import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "condenser tube cleaning in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional condenser tube cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/condenser-tube-cleaning-vadodara" },
  openGraph: {
    title: "condenser tube cleaning in Vadodara | VadodaraExperts",
    description: "Professional condenser tube cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/condenser-tube-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="condenser-tube-cleaning-vadodara" />;
}
