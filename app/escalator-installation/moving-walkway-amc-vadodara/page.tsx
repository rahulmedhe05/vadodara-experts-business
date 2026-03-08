import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Moving walkway AMC in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional moving walkway amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/moving-walkway-amc-vadodara" },
  openGraph: {
    title: "Moving walkway AMC in Vadodara | VadodaraExperts",
    description: "Professional moving walkway amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/moving-walkway-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="moving-walkway-amc-vadodara" />;
}
