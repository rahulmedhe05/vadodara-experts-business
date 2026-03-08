import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "E stamp paper in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional e stamp paper services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/e-stamp-paper-vadodara" },
  openGraph: {
    title: "E stamp paper in Vadodara | VadodaraExperts",
    description: "Professional e stamp paper services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/e-stamp-paper-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="e-stamp-paper-vadodara" />;
}
