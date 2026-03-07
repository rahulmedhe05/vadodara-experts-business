import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "conveyor for assembly line in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional conveyor for assembly line services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-for-assembly-line-vadodara" },
  openGraph: {
    title: "conveyor for assembly line in Vadodara | VadodaraExperts",
    description: "Professional conveyor for assembly line services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-for-assembly-line-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conveyor-for-assembly-line-vadodara" />;
}
