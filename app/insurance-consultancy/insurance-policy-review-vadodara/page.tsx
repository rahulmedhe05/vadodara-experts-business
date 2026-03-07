import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Insurance policy review in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional insurance policy review services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/insurance-policy-review-vadodara" },
  openGraph: {
    title: "Insurance policy review in Vadodara | VadodaraExperts",
    description: "Professional insurance policy review services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/insurance-policy-review-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insurance-policy-review-vadodara" />;
}
