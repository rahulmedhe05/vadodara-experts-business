import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "surface preparation for epoxy in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional surface preparation for epoxy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/surface-preparation-for-epoxy-vadodara" },
  openGraph: {
    title: "surface preparation for epoxy in Vadodara | VadodaraExperts",
    description: "Professional surface preparation for epoxy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/surface-preparation-for-epoxy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="surface-preparation-for-epoxy-vadodara" />;
}
