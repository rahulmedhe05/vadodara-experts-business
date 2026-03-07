import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "social media name numerology in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional social media name numerology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/social-media-name-numerology-vadodara" },
  openGraph: {
    title: "social media name numerology in Vadodara | VadodaraExperts",
    description: "Professional social media name numerology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/social-media-name-numerology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="social-media-name-numerology-vadodara" />;
}
