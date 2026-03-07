import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "GPCB compliance waste in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional gpcb compliance waste services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/gpcb-compliance-waste-vadodara" },
  openGraph: {
    title: "GPCB compliance waste in Vadodara | VadodaraExperts",
    description: "Professional gpcb compliance waste services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/gpcb-compliance-waste-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gpcb-compliance-waste-vadodara" />;
}
