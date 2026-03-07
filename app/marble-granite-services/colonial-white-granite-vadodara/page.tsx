import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Colonial white granite in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional colonial white granite services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/colonial-white-granite-vadodara" },
  openGraph: {
    title: "Colonial white granite in Vadodara | VadodaraExperts",
    description: "Professional colonial white granite services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/colonial-white-granite-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="colonial-white-granite-vadodara" />;
}
