import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "vibratory feeder in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional vibratory feeder services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/vibratory-feeder-vadodara" },
  openGraph: {
    title: "vibratory feeder in Vadodara | VadodaraExperts",
    description: "Professional vibratory feeder services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/vibratory-feeder-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vibratory-feeder-vadodara" />;
}
