import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "land development company in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional land development company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/land-development-company-vadodara" },
  openGraph: {
    title: "land development company in Vadodara | VadodaraExperts",
    description: "Professional land development company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/land-development-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-development-company-vadodara" />;
}
