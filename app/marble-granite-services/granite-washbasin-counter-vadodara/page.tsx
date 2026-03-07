import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Granite washbasin counter in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional granite washbasin counter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/granite-washbasin-counter-vadodara" },
  openGraph: {
    title: "Granite washbasin counter in Vadodara | VadodaraExperts",
    description: "Professional granite washbasin counter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/granite-washbasin-counter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="granite-washbasin-counter-vadodara" />;
}
