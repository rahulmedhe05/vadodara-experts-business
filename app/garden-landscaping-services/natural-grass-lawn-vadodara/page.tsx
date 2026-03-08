import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Natural grass lawn in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional natural grass lawn services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/natural-grass-lawn-vadodara" },
  openGraph: {
    title: "Natural grass lawn in Vadodara | VadodaraExperts",
    description: "Professional natural grass lawn services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/natural-grass-lawn-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="natural-grass-lawn-vadodara" />;
}
