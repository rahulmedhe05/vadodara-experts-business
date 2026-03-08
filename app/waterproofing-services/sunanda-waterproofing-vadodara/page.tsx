import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Sunanda waterproofing in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional sunanda waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/sunanda-waterproofing-vadodara" },
  openGraph: {
    title: "Sunanda waterproofing in Vadodara | VadodaraExperts",
    description: "Professional sunanda waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/sunanda-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sunanda-waterproofing-vadodara" />;
}
