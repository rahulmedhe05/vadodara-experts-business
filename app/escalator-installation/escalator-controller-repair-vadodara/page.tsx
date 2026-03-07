import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Escalator controller repair in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional escalator controller repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/escalator-controller-repair-vadodara" },
  openGraph: {
    title: "Escalator controller repair in Vadodara | VadodaraExperts",
    description: "Professional escalator controller repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/escalator-controller-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="escalator-controller-repair-vadodara" />;
}
