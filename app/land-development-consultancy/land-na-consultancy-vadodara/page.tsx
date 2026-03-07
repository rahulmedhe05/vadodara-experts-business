import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "land NA consultancy in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional land na consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/land-na-consultancy-vadodara" },
  openGraph: {
    title: "land NA consultancy in Vadodara | VadodaraExperts",
    description: "Professional land na consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/land-na-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-na-consultancy-vadodara" />;
}
