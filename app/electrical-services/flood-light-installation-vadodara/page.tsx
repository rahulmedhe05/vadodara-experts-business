import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Flood light installation in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional flood light installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/flood-light-installation-vadodara" },
  openGraph: {
    title: "Flood light installation in Vadodara | VadodaraExperts",
    description: "Professional flood light installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/flood-light-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flood-light-installation-vadodara" />;
}
