import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "affordable vastu consultant in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional affordable vastu consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/affordable-vastu-consultant-vadodara" },
  openGraph: {
    title: "affordable vastu consultant in Vadodara | VadodaraExperts",
    description: "Professional affordable vastu consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/affordable-vastu-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-vastu-consultant-vadodara" />;
}
