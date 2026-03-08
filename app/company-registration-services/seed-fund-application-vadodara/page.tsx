import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Seed fund application in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional seed fund application services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/seed-fund-application-vadodara" },
  openGraph: {
    title: "Seed fund application in Vadodara | VadodaraExperts",
    description: "Professional seed fund application services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/seed-fund-application-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="seed-fund-application-vadodara" />;
}
