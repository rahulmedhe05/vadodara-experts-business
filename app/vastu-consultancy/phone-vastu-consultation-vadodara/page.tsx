import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "phone vastu consultation in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional phone vastu consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/phone-vastu-consultation-vadodara" },
  openGraph: {
    title: "phone vastu consultation in Vadodara | VadodaraExperts",
    description: "Professional phone vastu consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/phone-vastu-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="phone-vastu-consultation-vadodara" />;
}
