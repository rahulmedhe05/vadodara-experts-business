import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "fire drill service in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fire drill service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fire-drill-service-vadodara" },
  openGraph: {
    title: "fire drill service in Vadodara | VadodaraExperts",
    description: "Professional fire drill service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fire-drill-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-drill-service-vadodara" />;
}
