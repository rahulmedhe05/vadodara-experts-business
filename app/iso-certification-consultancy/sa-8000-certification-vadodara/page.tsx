import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("iso-certification-consultancy")!;

export const metadata: Metadata = {
  title: "SA 8000 certification in Vadodara | ISO Certification Consultancy | VadodaraExperts",
  description: "Professional sa 8000 certification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/iso-certification-consultancy/sa-8000-certification-vadodara" },
  openGraph: {
    title: "SA 8000 certification in Vadodara | VadodaraExperts",
    description: "Professional sa 8000 certification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/iso-certification-consultancy/sa-8000-certification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sa-8000-certification-vadodara" />;
}
