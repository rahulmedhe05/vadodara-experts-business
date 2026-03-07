import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "electrical inspection in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional electrical inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/electrical-inspection-vadodara" },
  openGraph: {
    title: "electrical inspection in Vadodara | VadodaraExperts",
    description: "Professional electrical inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/electrical-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-inspection-vadodara" />;
}
