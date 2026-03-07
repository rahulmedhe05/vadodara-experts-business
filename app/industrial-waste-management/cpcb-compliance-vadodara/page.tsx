import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "CPCB compliance in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional cpcb compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/cpcb-compliance-vadodara" },
  openGraph: {
    title: "CPCB compliance in Vadodara | VadodaraExperts",
    description: "Professional cpcb compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/cpcb-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cpcb-compliance-vadodara" />;
}
