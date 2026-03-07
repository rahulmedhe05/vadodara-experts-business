import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "site safety audit in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional site safety audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/site-safety-audit-vadodara" },
  openGraph: {
    title: "site safety audit in Vadodara | VadodaraExperts",
    description: "Professional site safety audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/site-safety-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="site-safety-audit-vadodara" />;
}
