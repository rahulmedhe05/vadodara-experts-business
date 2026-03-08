import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Scandinavian interior design in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional scandinavian interior design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/scandinavian-interior-design-vadodara" },
  openGraph: {
    title: "Scandinavian interior design in Vadodara | VadodaraExperts",
    description: "Professional scandinavian interior design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/scandinavian-interior-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="scandinavian-interior-design-vadodara" />;
}
