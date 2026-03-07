import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Rough cast plaster in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional rough cast plaster services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/rough-cast-plaster-vadodara" },
  openGraph: {
    title: "Rough cast plaster in Vadodara | VadodaraExperts",
    description: "Professional rough cast plaster services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/rough-cast-plaster-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rough-cast-plaster-vadodara" />;
}
