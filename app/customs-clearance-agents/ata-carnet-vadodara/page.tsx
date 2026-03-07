import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "ATA carnet in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional ata carnet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/ata-carnet-vadodara" },
  openGraph: {
    title: "ATA carnet in Vadodara | VadodaraExperts",
    description: "Professional ata carnet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/ata-carnet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ata-carnet-vadodara" />;
}
