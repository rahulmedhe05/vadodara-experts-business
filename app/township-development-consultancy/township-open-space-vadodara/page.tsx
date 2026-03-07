import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "township open space in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional township open space services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/township-open-space-vadodara" },
  openGraph: {
    title: "township open space in Vadodara | VadodaraExperts",
    description: "Professional township open space services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/township-open-space-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="township-open-space-vadodara" />;
}
