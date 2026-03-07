import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "affordable numerologist in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional affordable numerologist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/affordable-numerologist-vadodara" },
  openGraph: {
    title: "affordable numerologist in Vadodara | VadodaraExperts",
    description: "Professional affordable numerologist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/affordable-numerologist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-numerologist-vadodara" />;
}
