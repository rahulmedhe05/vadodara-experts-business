import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Business restructuring in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional business restructuring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/business-restructuring-vadodara" },
  openGraph: {
    title: "Business restructuring in Vadodara | VadodaraExperts",
    description: "Professional business restructuring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/business-restructuring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="business-restructuring-vadodara" />;
}
