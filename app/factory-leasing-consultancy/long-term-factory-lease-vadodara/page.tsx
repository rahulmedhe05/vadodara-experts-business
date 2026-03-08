import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "long term factory lease in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional long term factory lease services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/long-term-factory-lease-vadodara" },
  openGraph: {
    title: "long term factory lease in Vadodara | VadodaraExperts",
    description: "Professional long term factory lease services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/long-term-factory-lease-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="long-term-factory-lease-vadodara" />;
}
