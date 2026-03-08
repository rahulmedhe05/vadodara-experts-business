import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "villa electrical contractor in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional villa electrical contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/villa-electrical-contractor-vadodara" },
  openGraph: {
    title: "villa electrical contractor in Vadodara | VadodaraExperts",
    description: "Professional villa electrical contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/villa-electrical-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="villa-electrical-contractor-vadodara" />;
}
