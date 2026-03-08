import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "AIS TIS verification in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional ais tis verification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/ais-tis-verification-vadodara" },
  openGraph: {
    title: "AIS TIS verification in Vadodara | VadodaraExperts",
    description: "Professional ais tis verification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/ais-tis-verification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ais-tis-verification-vadodara" />;
}
