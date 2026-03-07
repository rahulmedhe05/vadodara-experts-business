import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "online astrology consultation in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional online astrology consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/online-astrology-consultation-vadodara" },
  openGraph: {
    title: "online astrology consultation in Vadodara | VadodaraExperts",
    description: "Professional online astrology consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/online-astrology-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="online-astrology-consultation-vadodara" />;
}
