import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "near miss reporting in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional near miss reporting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/near-miss-reporting-vadodara" },
  openGraph: {
    title: "near miss reporting in Vadodara | VadodaraExperts",
    description: "Professional near miss reporting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/near-miss-reporting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="near-miss-reporting-vadodara" />;
}
