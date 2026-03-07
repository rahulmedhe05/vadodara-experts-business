import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Indian marble in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional indian marble services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/indian-marble-vadodara" },
  openGraph: {
    title: "Indian marble in Vadodara | VadodaraExperts",
    description: "Professional indian marble services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/indian-marble-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="indian-marble-vadodara" />;
}
