import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Geographical indication in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional geographical indication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/geographical-indication-vadodara" },
  openGraph: {
    title: "Geographical indication in Vadodara | VadodaraExperts",
    description: "Professional geographical indication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/geographical-indication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="geographical-indication-vadodara" />;
}
