import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Mall escalator installation in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional mall escalator installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/mall-escalator-installation-vadodara" },
  openGraph: {
    title: "Mall escalator installation in Vadodara | VadodaraExperts",
    description: "Professional mall escalator installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/mall-escalator-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mall-escalator-installation-vadodara" />;
}
