import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "best vastu consultant in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional best vastu consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/best-vastu-consultant-vadodara" },
  openGraph: {
    title: "best vastu consultant in Vadodara | VadodaraExperts",
    description: "Professional best vastu consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/best-vastu-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-vastu-consultant-vadodara" />;
}
