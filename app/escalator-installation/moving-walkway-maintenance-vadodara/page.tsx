import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Moving walkway maintenance in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional moving walkway maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/moving-walkway-maintenance-vadodara" },
  openGraph: {
    title: "Moving walkway maintenance in Vadodara | VadodaraExperts",
    description: "Professional moving walkway maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/moving-walkway-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="moving-walkway-maintenance-vadodara" />;
}
