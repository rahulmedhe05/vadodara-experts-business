import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "cable jointing in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional cable jointing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/cable-jointing-vadodara" },
  openGraph: {
    title: "cable jointing in Vadodara | VadodaraExperts",
    description: "Professional cable jointing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/cable-jointing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cable-jointing-vadodara" />;
}
