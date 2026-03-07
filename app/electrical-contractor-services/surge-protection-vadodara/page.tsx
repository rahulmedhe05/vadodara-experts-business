import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "surge protection in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional surge protection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/surge-protection-vadodara" },
  openGraph: {
    title: "surge protection in Vadodara | VadodaraExperts",
    description: "Professional surge protection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/surge-protection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="surge-protection-vadodara" />;
}
