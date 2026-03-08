import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "CE marking in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional ce marking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/ce-marking-vadodara" },
  openGraph: {
    title: "CE marking in Vadodara | VadodaraExperts",
    description: "Professional ce marking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/ce-marking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ce-marking-vadodara" />;
}
