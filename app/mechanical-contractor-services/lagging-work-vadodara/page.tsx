import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "lagging work in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional lagging work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/lagging-work-vadodara" },
  openGraph: {
    title: "lagging work in Vadodara | VadodaraExperts",
    description: "Professional lagging work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/lagging-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lagging-work-vadodara" />;
}
