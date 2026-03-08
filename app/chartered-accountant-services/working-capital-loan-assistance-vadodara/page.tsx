import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Working capital loan assistance in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional working capital loan assistance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/working-capital-loan-assistance-vadodara" },
  openGraph: {
    title: "Working capital loan assistance in Vadodara | VadodaraExperts",
    description: "Professional working capital loan assistance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/working-capital-loan-assistance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="working-capital-loan-assistance-vadodara" />;
}
