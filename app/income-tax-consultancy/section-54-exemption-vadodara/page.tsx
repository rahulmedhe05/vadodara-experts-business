import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Section 54 exemption in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional section 54 exemption services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/section-54-exemption-vadodara" },
  openGraph: {
    title: "Section 54 exemption in Vadodara | VadodaraExperts",
    description: "Professional section 54 exemption services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/section-54-exemption-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="section-54-exemption-vadodara" />;
}
