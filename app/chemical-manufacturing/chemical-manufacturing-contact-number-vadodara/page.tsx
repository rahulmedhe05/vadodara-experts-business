import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chemical-manufacturing")!;

export const metadata: Metadata = {
  title: "Chemical Manufacturing Contact Number in Vadodara | Chemical Manufacturing | VadodaraExperts",
  description: "Professional chemical manufacturing contact number services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-contact-number-vadodara" },
  openGraph: {
    title: "Chemical Manufacturing Contact Number in Vadodara | VadodaraExperts",
    description: "Professional chemical manufacturing contact number services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-contact-number-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-manufacturing-contact-number-vadodara" />;
}
