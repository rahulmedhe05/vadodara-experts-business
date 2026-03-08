import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "home inspector in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional home inspector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/home-inspector-vadodara" },
  openGraph: {
    title: "home inspector in Vadodara | VadodaraExperts",
    description: "Professional home inspector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/home-inspector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-inspector-vadodara" />;
}
