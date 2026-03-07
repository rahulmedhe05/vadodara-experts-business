import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "DPR preparation in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional dpr preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/dpr-preparation-vadodara" },
  openGraph: {
    title: "DPR preparation in Vadodara | VadodaraExperts",
    description: "Professional dpr preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/dpr-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dpr-preparation-vadodara" />;
}
