import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Digital signature certificate in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional digital signature certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/digital-signature-certificate-vadodara" },
  openGraph: {
    title: "Digital signature certificate in Vadodara | VadodaraExperts",
    description: "Professional digital signature certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/digital-signature-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="digital-signature-certificate-vadodara" />;
}
