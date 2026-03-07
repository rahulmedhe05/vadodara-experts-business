import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "conveyor gearbox in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional conveyor gearbox services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-gearbox-vadodara" },
  openGraph: {
    title: "conveyor gearbox in Vadodara | VadodaraExperts",
    description: "Professional conveyor gearbox services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-gearbox-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conveyor-gearbox-vadodara" />;
}
