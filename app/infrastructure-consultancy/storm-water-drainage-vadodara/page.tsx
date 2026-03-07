import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "storm water drainage in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional storm water drainage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/storm-water-drainage-vadodara" },
  openGraph: {
    title: "storm water drainage in Vadodara | VadodaraExperts",
    description: "Professional storm water drainage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/storm-water-drainage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="storm-water-drainage-vadodara" />;
}
