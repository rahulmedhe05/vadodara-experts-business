import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "custom steel fabrication in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional custom steel fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/custom-steel-fabrication-vadodara" },
  openGraph: {
    title: "custom steel fabrication in Vadodara | VadodaraExperts",
    description: "Professional custom steel fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/custom-steel-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="custom-steel-fabrication-vadodara" />;
}
