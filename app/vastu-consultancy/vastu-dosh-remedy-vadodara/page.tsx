import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "vastu dosh remedy in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional vastu dosh remedy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/vastu-dosh-remedy-vadodara" },
  openGraph: {
    title: "vastu dosh remedy in Vadodara | VadodaraExperts",
    description: "Professional vastu dosh remedy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/vastu-dosh-remedy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vastu-dosh-remedy-vadodara" />;
}
