import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Incubation support in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional incubation support services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/incubation-support-vadodara" },
  openGraph: {
    title: "Incubation support in Vadodara | VadodaraExperts",
    description: "Professional incubation support services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/incubation-support-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="incubation-support-vadodara" />;
}
