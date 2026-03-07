import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "School landscaping in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional school landscaping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/school-landscaping-vadodara" },
  openGraph: {
    title: "School landscaping in Vadodara | VadodaraExperts",
    description: "Professional school landscaping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/school-landscaping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="school-landscaping-vadodara" />;
}
