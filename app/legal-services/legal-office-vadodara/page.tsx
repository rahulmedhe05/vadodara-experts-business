import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Legal office in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional legal office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/legal-office-vadodara" },
  openGraph: {
    title: "Legal office in Vadodara | VadodaraExperts",
    description: "Professional legal office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/legal-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="legal-office-vadodara" />;
}
