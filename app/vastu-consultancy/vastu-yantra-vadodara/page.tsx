import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "vastu yantra in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional vastu yantra services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/vastu-yantra-vadodara" },
  openGraph: {
    title: "vastu yantra in Vadodara | VadodaraExperts",
    description: "Professional vastu yantra services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/vastu-yantra-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vastu-yantra-vadodara" />;
}
