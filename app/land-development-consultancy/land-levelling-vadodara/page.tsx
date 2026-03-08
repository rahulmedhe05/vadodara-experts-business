import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "land levelling in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional land levelling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/land-levelling-vadodara" },
  openGraph: {
    title: "land levelling in Vadodara | VadodaraExperts",
    description: "Professional land levelling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/land-levelling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-levelling-vadodara" />;
}
