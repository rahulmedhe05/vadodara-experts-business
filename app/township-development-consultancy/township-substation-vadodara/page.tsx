import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "township substation in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional township substation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/township-substation-vadodara" },
  openGraph: {
    title: "township substation in Vadodara | VadodaraExperts",
    description: "Professional township substation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/township-substation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="township-substation-vadodara" />;
}
