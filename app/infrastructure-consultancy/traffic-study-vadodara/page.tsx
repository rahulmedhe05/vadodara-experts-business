import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "traffic study in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional traffic study services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/traffic-study-vadodara" },
  openGraph: {
    title: "traffic study in Vadodara | VadodaraExperts",
    description: "Professional traffic study services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/traffic-study-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="traffic-study-vadodara" />;
}
