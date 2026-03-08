import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Electric geyser repair in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional electric geyser repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/electric-geyser-repair-vadodara" },
  openGraph: {
    title: "Electric geyser repair in Vadodara | VadodaraExperts",
    description: "Professional electric geyser repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/electric-geyser-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electric-geyser-repair-vadodara" />;
}
