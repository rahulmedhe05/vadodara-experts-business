import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Money back policy in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional money back policy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/money-back-policy-vadodara" },
  openGraph: {
    title: "Money back policy in Vadodara | VadodaraExperts",
    description: "Professional money back policy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/money-back-policy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="money-back-policy-vadodara" />;
}
