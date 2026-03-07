import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "AC electrical connection in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional ac electrical connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/ac-electrical-connection-vadodara" },
  openGraph: {
    title: "AC electrical connection in Vadodara | VadodaraExperts",
    description: "Professional ac electrical connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/ac-electrical-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ac-electrical-connection-vadodara" />;
}
