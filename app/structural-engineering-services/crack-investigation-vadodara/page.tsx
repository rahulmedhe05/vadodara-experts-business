import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Crack investigation in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional crack investigation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/crack-investigation-vadodara" },
  openGraph: {
    title: "Crack investigation in Vadodara | VadodaraExperts",
    description: "Professional crack investigation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/crack-investigation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="crack-investigation-vadodara" />;
}
