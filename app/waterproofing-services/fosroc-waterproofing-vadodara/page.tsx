import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Fosroc waterproofing in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional fosroc waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/fosroc-waterproofing-vadodara" },
  openGraph: {
    title: "Fosroc waterproofing in Vadodara | VadodaraExperts",
    description: "Professional fosroc waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/fosroc-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fosroc-waterproofing-vadodara" />;
}
