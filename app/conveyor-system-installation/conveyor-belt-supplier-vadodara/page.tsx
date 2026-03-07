import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "conveyor belt supplier in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional conveyor belt supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-belt-supplier-vadodara" },
  openGraph: {
    title: "conveyor belt supplier in Vadodara | VadodaraExperts",
    description: "Professional conveyor belt supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-belt-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conveyor-belt-supplier-vadodara" />;
}
