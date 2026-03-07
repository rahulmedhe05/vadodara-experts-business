import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Corporate event catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional corporate event catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/corporate-event-catering-vadodara" },
  openGraph: {
    title: "Corporate event catering in Vadodara | VadodaraExperts",
    description: "Professional corporate event catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/corporate-event-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corporate-event-catering-vadodara" />;
}
