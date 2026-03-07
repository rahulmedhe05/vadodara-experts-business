import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Business startup consultation in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional business startup consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/business-startup-consultation-vadodara" },
  openGraph: {
    title: "Business startup consultation in Vadodara | VadodaraExperts",
    description: "Professional business startup consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/business-startup-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="business-startup-consultation-vadodara" />;
}
