import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "changeover panel in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional changeover panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/changeover-panel-vadodara" },
  openGraph: {
    title: "changeover panel in Vadodara | VadodaraExperts",
    description: "Professional changeover panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/changeover-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="changeover-panel-vadodara" />;
}
