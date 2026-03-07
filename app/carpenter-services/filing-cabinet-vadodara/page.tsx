import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Filing cabinet in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional filing cabinet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/filing-cabinet-vadodara" },
  openGraph: {
    title: "Filing cabinet in Vadodara | VadodaraExperts",
    description: "Professional filing cabinet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/filing-cabinet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="filing-cabinet-vadodara" />;
}
