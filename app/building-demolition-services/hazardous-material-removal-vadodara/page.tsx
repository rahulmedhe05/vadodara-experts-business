import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "hazardous material removal in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional hazardous material removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/hazardous-material-removal-vadodara" },
  openGraph: {
    title: "hazardous material removal in Vadodara | VadodaraExperts",
    description: "Professional hazardous material removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/hazardous-material-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hazardous-material-removal-vadodara" />;
}
