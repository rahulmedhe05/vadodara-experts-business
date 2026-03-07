import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "belt conveyor system in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional belt conveyor system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/belt-conveyor-system-vadodara" },
  openGraph: {
    title: "belt conveyor system in Vadodara | VadodaraExperts",
    description: "Professional belt conveyor system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/belt-conveyor-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="belt-conveyor-system-vadodara" />;
}
