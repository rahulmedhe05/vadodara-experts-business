import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "industrial estate infrastructure in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional industrial estate infrastructure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/industrial-estate-infrastructure-vadodara" },
  openGraph: {
    title: "industrial estate infrastructure in Vadodara | VadodaraExperts",
    description: "Professional industrial estate infrastructure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/industrial-estate-infrastructure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-estate-infrastructure-vadodara" />;
}
