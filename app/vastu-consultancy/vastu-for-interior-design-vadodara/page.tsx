import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "vastu for interior design in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional vastu for interior design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/vastu-for-interior-design-vadodara" },
  openGraph: {
    title: "vastu for interior design in Vadodara | VadodaraExperts",
    description: "Professional vastu for interior design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/vastu-for-interior-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vastu-for-interior-design-vadodara" />;
}
