import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Moving walkway repair in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional moving walkway repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/moving-walkway-repair-vadodara" },
  openGraph: {
    title: "Moving walkway repair in Vadodara | VadodaraExperts",
    description: "Professional moving walkway repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/moving-walkway-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="moving-walkway-repair-vadodara" />;
}
