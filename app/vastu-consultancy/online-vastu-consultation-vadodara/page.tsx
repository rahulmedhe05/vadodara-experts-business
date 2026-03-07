import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "online vastu consultation in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional online vastu consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/online-vastu-consultation-vadodara" },
  openGraph: {
    title: "online vastu consultation in Vadodara | VadodaraExperts",
    description: "Professional online vastu consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/online-vastu-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="online-vastu-consultation-vadodara" />;
}
