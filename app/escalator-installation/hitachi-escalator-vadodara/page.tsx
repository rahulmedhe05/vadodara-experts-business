import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Hitachi escalator in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional hitachi escalator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/hitachi-escalator-vadodara" },
  openGraph: {
    title: "Hitachi escalator in Vadodara | VadodaraExperts",
    description: "Professional hitachi escalator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/hitachi-escalator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hitachi-escalator-vadodara" />;
}
