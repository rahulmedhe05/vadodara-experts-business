import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Consumer forum advocate in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional consumer forum advocate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/consumer-forum-advocate-vadodara" },
  openGraph: {
    title: "Consumer forum advocate in Vadodara | VadodaraExperts",
    description: "Professional consumer forum advocate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/consumer-forum-advocate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="consumer-forum-advocate-vadodara" />;
}
