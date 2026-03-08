import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "famous vastu consultant in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional famous vastu consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/famous-vastu-consultant-vadodara" },
  openGraph: {
    title: "famous vastu consultant in Vadodara | VadodaraExperts",
    description: "Professional famous vastu consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/famous-vastu-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="famous-vastu-consultant-vadodara" />;
}
