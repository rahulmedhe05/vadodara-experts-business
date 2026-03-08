import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Cool roof coating in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional cool roof coating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/cool-roof-coating-vadodara" },
  openGraph: {
    title: "Cool roof coating in Vadodara | VadodaraExperts",
    description: "Professional cool roof coating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/cool-roof-coating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cool-roof-coating-vadodara" />;
}
