import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Fixed to floating conversion in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional fixed to floating conversion services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/fixed-to-floating-conversion-vadodara" },
  openGraph: {
    title: "Fixed to floating conversion in Vadodara | VadodaraExperts",
    description: "Professional fixed to floating conversion services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/fixed-to-floating-conversion-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fixed-to-floating-conversion-vadodara" />;
}
