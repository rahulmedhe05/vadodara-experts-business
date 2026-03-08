import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "township structural engineer in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional township structural engineer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/township-structural-engineer-vadodara" },
  openGraph: {
    title: "township structural engineer in Vadodara | VadodaraExperts",
    description: "Professional township structural engineer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/township-structural-engineer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="township-structural-engineer-vadodara" />;
}
