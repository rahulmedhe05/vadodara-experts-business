import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "method statement preparation in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional method statement preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/method-statement-preparation-vadodara" },
  openGraph: {
    title: "method statement preparation in Vadodara | VadodaraExperts",
    description: "Professional method statement preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/method-statement-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="method-statement-preparation-vadodara" />;
}
