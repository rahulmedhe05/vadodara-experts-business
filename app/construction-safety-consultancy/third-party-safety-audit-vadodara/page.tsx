import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "third party safety audit in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional third party safety audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/third-party-safety-audit-vadodara" },
  openGraph: {
    title: "third party safety audit in Vadodara | VadodaraExperts",
    description: "Professional third party safety audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/third-party-safety-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="third-party-safety-audit-vadodara" />;
}
