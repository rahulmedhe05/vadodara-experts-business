import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Chartered accountant firm in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional chartered accountant firm services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/chartered-accountant-firm-vadodara" },
  openGraph: {
    title: "Chartered accountant firm in Vadodara | VadodaraExperts",
    description: "Professional chartered accountant firm services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/chartered-accountant-firm-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chartered-accountant-firm-vadodara" />;
}
