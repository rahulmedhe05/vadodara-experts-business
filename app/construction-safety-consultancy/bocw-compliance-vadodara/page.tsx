import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "BOCW compliance in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional bocw compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/bocw-compliance-vadodara" },
  openGraph: {
    title: "BOCW compliance in Vadodara | VadodaraExperts",
    description: "Professional bocw compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/bocw-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bocw-compliance-vadodara" />;
}
