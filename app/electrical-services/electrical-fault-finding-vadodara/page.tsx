import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Electrical fault finding in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional electrical fault finding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/electrical-fault-finding-vadodara" },
  openGraph: {
    title: "Electrical fault finding in Vadodara | VadodaraExperts",
    description: "Professional electrical fault finding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/electrical-fault-finding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-fault-finding-vadodara" />;
}
