import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "GPCB safety compliance in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional gpcb safety compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/gpcb-safety-compliance-vadodara" },
  openGraph: {
    title: "GPCB safety compliance in Vadodara | VadodaraExperts",
    description: "Professional gpcb safety compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/gpcb-safety-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gpcb-safety-compliance-vadodara" />;
}
