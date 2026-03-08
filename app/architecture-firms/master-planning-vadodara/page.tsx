import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Master planning in Vadodara | Architecture Firms | VadodaraExperts",
  description: "Professional master planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms/master-planning-vadodara" },
  openGraph: {
    title: "Master planning in Vadodara | VadodaraExperts",
    description: "Professional master planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/architecture-firms/master-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="master-planning-vadodara" />;
}
