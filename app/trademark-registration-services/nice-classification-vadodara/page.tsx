import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Nice classification in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional nice classification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/nice-classification-vadodara" },
  openGraph: {
    title: "Nice classification in Vadodara | VadodaraExperts",
    description: "Professional nice classification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/nice-classification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nice-classification-vadodara" />;
}
