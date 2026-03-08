import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "PAN card application in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional pan card application services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/pan-card-application-vadodara" },
  openGraph: {
    title: "PAN card application in Vadodara | VadodaraExperts",
    description: "Professional pan card application services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/pan-card-application-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pan-card-application-vadodara" />;
}
