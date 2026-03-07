import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Marriage registration in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional marriage registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/marriage-registration-vadodara" },
  openGraph: {
    title: "Marriage registration in Vadodara | VadodaraExperts",
    description: "Professional marriage registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/marriage-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marriage-registration-vadodara" />;
}
