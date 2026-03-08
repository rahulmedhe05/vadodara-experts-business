import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("vastu-consultancy")!;

export const metadata: Metadata = {
  title: "feng shui consultant in Vadodara | Vastu Consultancy | VadodaraExperts",
  description: "Professional feng shui consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/vastu-consultancy/feng-shui-consultant-vadodara" },
  openGraph: {
    title: "feng shui consultant in Vadodara | VadodaraExperts",
    description: "Professional feng shui consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/vastu-consultancy/feng-shui-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="feng-shui-consultant-vadodara" />;
}
