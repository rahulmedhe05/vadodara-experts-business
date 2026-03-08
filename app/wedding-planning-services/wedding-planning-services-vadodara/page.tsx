import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Wedding planning services in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional wedding planning services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/wedding-planning-services-vadodara" },
  openGraph: {
    title: "Wedding planning services in Vadodara | VadodaraExperts",
    description: "Professional wedding planning services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/wedding-planning-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-planning-services-vadodara" />;
}
