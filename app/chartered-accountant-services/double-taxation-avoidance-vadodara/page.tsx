import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Double taxation avoidance in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional double taxation avoidance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/double-taxation-avoidance-vadodara" },
  openGraph: {
    title: "Double taxation avoidance in Vadodara | VadodaraExperts",
    description: "Professional double taxation avoidance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/double-taxation-avoidance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="double-taxation-avoidance-vadodara" />;
}
