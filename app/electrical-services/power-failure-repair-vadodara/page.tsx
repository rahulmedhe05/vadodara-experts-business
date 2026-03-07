import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Power failure repair in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional power failure repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/power-failure-repair-vadodara" },
  openGraph: {
    title: "Power failure repair in Vadodara | VadodaraExperts",
    description: "Professional power failure repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/power-failure-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-failure-repair-vadodara" />;
}
