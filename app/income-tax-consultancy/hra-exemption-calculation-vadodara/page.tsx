import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "HRA exemption calculation in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional hra exemption calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/hra-exemption-calculation-vadodara" },
  openGraph: {
    title: "HRA exemption calculation in Vadodara | VadodaraExperts",
    description: "Professional hra exemption calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/hra-exemption-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hra-exemption-calculation-vadodara" />;
}
