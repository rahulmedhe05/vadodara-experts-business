import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "SEZ land development in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional sez land development services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/sez-land-development-vadodara" },
  openGraph: {
    title: "SEZ land development in Vadodara | VadodaraExperts",
    description: "Professional sez land development services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/sez-land-development-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sez-land-development-vadodara" />;
}
