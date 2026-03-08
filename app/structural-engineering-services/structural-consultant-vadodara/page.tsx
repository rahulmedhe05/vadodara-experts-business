import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Structural consultant in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional structural consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/structural-consultant-vadodara" },
  openGraph: {
    title: "Structural consultant in Vadodara | VadodaraExperts",
    description: "Professional structural consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/structural-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-consultant-vadodara" />;
}
