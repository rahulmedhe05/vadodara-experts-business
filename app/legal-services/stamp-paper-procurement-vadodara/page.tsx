import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Stamp paper procurement in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional stamp paper procurement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/stamp-paper-procurement-vadodara" },
  openGraph: {
    title: "Stamp paper procurement in Vadodara | VadodaraExperts",
    description: "Professional stamp paper procurement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/stamp-paper-procurement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stamp-paper-procurement-vadodara" />;
}
