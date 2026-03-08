import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Sintered stone in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional sintered stone services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/sintered-stone-vadodara" },
  openGraph: {
    title: "Sintered stone in Vadodara | VadodaraExperts",
    description: "Professional sintered stone services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/sintered-stone-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sintered-stone-vadodara" />;
}
