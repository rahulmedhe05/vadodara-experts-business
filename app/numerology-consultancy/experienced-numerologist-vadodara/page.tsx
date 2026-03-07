import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "experienced numerologist in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional experienced numerologist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/experienced-numerologist-vadodara" },
  openGraph: {
    title: "experienced numerologist in Vadodara | VadodaraExperts",
    description: "Professional experienced numerologist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/experienced-numerologist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="experienced-numerologist-vadodara" />;
}
