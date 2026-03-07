import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Structural forensic investigation in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional structural forensic investigation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/structural-forensic-investigation-vadodara" },
  openGraph: {
    title: "Structural forensic investigation in Vadodara | VadodaraExperts",
    description: "Professional structural forensic investigation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/structural-forensic-investigation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-forensic-investigation-vadodara" />;
}
