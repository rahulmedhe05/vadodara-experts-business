import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "cable termination in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional cable termination services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/cable-termination-vadodara" },
  openGraph: {
    title: "cable termination in Vadodara | VadodaraExperts",
    description: "Professional cable termination services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/cable-termination-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cable-termination-vadodara" />;
}
