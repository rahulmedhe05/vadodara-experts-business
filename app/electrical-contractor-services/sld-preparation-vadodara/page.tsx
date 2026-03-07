import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "SLD preparation in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional sld preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/sld-preparation-vadodara" },
  openGraph: {
    title: "SLD preparation in Vadodara | VadodaraExperts",
    description: "Professional sld preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/sld-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sld-preparation-vadodara" />;
}
