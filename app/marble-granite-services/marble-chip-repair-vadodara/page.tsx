import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Marble chip repair in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional marble chip repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/marble-chip-repair-vadodara" },
  openGraph: {
    title: "Marble chip repair in Vadodara | VadodaraExperts",
    description: "Professional marble chip repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/marble-chip-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marble-chip-repair-vadodara" />;
}
