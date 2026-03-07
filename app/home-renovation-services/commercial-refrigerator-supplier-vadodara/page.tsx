import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Commercial refrigerator supplier in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional commercial refrigerator supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/commercial-refrigerator-supplier-vadodara" },
  openGraph: {
    title: "Commercial refrigerator supplier in Vadodara | VadodaraExperts",
    description: "Professional commercial refrigerator supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/commercial-refrigerator-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-refrigerator-supplier-vadodara" />;
}
