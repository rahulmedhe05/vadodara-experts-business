import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "joint venture advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional joint venture advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/joint-venture-advisory-vadodara" },
  openGraph: {
    title: "joint venture advisory in Vadodara | VadodaraExperts",
    description: "Professional joint venture advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/joint-venture-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="joint-venture-advisory-vadodara" />;
}
