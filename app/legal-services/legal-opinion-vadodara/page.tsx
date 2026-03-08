import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Legal opinion in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional legal opinion services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/legal-opinion-vadodara" },
  openGraph: {
    title: "Legal opinion in Vadodara | VadodaraExperts",
    description: "Professional legal opinion services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/legal-opinion-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="legal-opinion-vadodara" />;
}
