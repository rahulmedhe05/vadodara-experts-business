import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "spot welding in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional spot welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/spot-welding-vadodara" },
  openGraph: {
    title: "spot welding in Vadodara | VadodaraExperts",
    description: "Professional spot welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/spot-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spot-welding-vadodara" />;
}
