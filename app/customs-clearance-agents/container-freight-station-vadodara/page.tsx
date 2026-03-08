import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("customs-clearance-agents")!;

export const metadata: Metadata = {
  title: "Container freight station in Vadodara | Customs Clearance Agents | VadodaraExperts",
  description: "Professional container freight station services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/customs-clearance-agents/container-freight-station-vadodara" },
  openGraph: {
    title: "Container freight station in Vadodara | VadodaraExperts",
    description: "Professional container freight station services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/customs-clearance-agents/container-freight-station-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="container-freight-station-vadodara" />;
}
