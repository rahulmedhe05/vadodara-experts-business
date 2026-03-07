import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Banquet hall for wedding in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional banquet hall for wedding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/banquet-hall-for-wedding-vadodara" },
  openGraph: {
    title: "Banquet hall for wedding in Vadodara | VadodaraExperts",
    description: "Professional banquet hall for wedding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/banquet-hall-for-wedding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="banquet-hall-for-wedding-vadodara" />;
}
