import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Startup pitch deck in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional startup pitch deck services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/startup-pitch-deck-vadodara" },
  openGraph: {
    title: "Startup pitch deck in Vadodara | VadodaraExperts",
    description: "Professional startup pitch deck services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/startup-pitch-deck-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="startup-pitch-deck-vadodara" />;
}
