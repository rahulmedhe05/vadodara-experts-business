import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "FSSAI compliant kitchen in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional fssai compliant kitchen services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/fssai-compliant-kitchen-vadodara" },
  openGraph: {
    title: "FSSAI compliant kitchen in Vadodara | VadodaraExperts",
    description: "Professional fssai compliant kitchen services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/fssai-compliant-kitchen-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fssai-compliant-kitchen-vadodara" />;
}
