import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "conveyor spare parts in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional conveyor spare parts services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-spare-parts-vadodara" },
  openGraph: {
    title: "conveyor spare parts in Vadodara | VadodaraExperts",
    description: "Professional conveyor spare parts services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-spare-parts-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conveyor-spare-parts-vadodara" />;
}
