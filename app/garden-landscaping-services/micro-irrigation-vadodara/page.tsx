import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Micro irrigation in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional micro irrigation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/micro-irrigation-vadodara" },
  openGraph: {
    title: "Micro irrigation in Vadodara | VadodaraExperts",
    description: "Professional micro irrigation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/micro-irrigation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="micro-irrigation-vadodara" />;
}
