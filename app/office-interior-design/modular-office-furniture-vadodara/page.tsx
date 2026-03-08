import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "modular office furniture in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional modular office furniture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/modular-office-furniture-vadodara" },
  openGraph: {
    title: "modular office furniture in Vadodara | VadodaraExperts",
    description: "Professional modular office furniture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/modular-office-furniture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-office-furniture-vadodara" />;
}
