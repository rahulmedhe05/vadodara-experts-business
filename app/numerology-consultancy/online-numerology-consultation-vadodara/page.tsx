import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "online numerology consultation in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional online numerology consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/online-numerology-consultation-vadodara" },
  openGraph: {
    title: "online numerology consultation in Vadodara | VadodaraExperts",
    description: "Professional online numerology consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/online-numerology-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="online-numerology-consultation-vadodara" />;
}
