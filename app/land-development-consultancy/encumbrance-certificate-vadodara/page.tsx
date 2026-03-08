import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "encumbrance certificate in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional encumbrance certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/encumbrance-certificate-vadodara" },
  openGraph: {
    title: "encumbrance certificate in Vadodara | VadodaraExperts",
    description: "Professional encumbrance certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/encumbrance-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="encumbrance-certificate-vadodara" />;
}
