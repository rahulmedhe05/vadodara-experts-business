import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "7/12 extract consultancy in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional 7/12 extract consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/712-extract-consultancy-vadodara" },
  openGraph: {
    title: "7/12 extract consultancy in Vadodara | VadodaraExperts",
    description: "Professional 7/12 extract consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/712-extract-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="712-extract-consultancy-vadodara" />;
}
