import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "vastu for factory in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional vastu for factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/vastu-for-factory-vadodara" },
  openGraph: {
    title: "vastu for factory in Vadodara | VadodaraExperts",
    description: "Professional vastu for factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/vastu-for-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vastu-for-factory-vadodara" />;
}
