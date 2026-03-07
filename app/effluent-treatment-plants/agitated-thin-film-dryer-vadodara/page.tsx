import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "agitated thin film dryer in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional agitated thin film dryer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/agitated-thin-film-dryer-vadodara" },
  openGraph: {
    title: "agitated thin film dryer in Vadodara | VadodaraExperts",
    description: "Professional agitated thin film dryer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/agitated-thin-film-dryer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="agitated-thin-film-dryer-vadodara" />;
}
