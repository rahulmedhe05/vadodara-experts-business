import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Granite floor polishing in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional granite floor polishing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/granite-floor-polishing-vadodara" },
  openGraph: {
    title: "Granite floor polishing in Vadodara | VadodaraExperts",
    description: "Professional granite floor polishing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/granite-floor-polishing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="granite-floor-polishing-vadodara" />;
}
