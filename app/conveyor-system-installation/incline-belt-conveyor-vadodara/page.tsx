import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "incline belt conveyor in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional incline belt conveyor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/incline-belt-conveyor-vadodara" },
  openGraph: {
    title: "incline belt conveyor in Vadodara | VadodaraExperts",
    description: "Professional incline belt conveyor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/incline-belt-conveyor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="incline-belt-conveyor-vadodara" />;
}
