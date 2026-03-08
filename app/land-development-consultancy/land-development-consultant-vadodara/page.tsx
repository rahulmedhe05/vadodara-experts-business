import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "land development consultant in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional land development consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/land-development-consultant-vadodara" },
  openGraph: {
    title: "land development consultant in Vadodara | VadodaraExperts",
    description: "Professional land development consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/land-development-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-development-consultant-vadodara" />;
}
