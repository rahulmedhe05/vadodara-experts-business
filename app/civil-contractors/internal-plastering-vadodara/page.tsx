import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Internal plastering in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional internal plastering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/internal-plastering-vadodara" },
  openGraph: {
    title: "Internal plastering in Vadodara | VadodaraExperts",
    description: "Professional internal plastering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/internal-plastering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="internal-plastering-vadodara" />;
}
