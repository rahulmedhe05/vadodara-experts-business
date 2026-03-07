import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "concrete polishing in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional concrete polishing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/concrete-polishing-vadodara" },
  openGraph: {
    title: "concrete polishing in Vadodara | VadodaraExperts",
    description: "Professional concrete polishing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/concrete-polishing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concrete-polishing-vadodara" />;
}
