import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "affordable housing infrastructure in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional affordable housing infrastructure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/affordable-housing-infrastructure-vadodara" },
  openGraph: {
    title: "affordable housing infrastructure in Vadodara | VadodaraExperts",
    description: "Professional affordable housing infrastructure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/affordable-housing-infrastructure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-housing-infrastructure-vadodara" />;
}
