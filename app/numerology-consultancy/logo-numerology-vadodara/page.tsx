import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "logo numerology in Vadodara | Numerology Consultancy | VadodaraExperts",
  description: "Professional logo numerology services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy/logo-numerology-vadodara" },
  openGraph: {
    title: "logo numerology in Vadodara | VadodaraExperts",
    description: "Professional logo numerology services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/numerology-consultancy/logo-numerology-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="logo-numerology-vadodara" />;
}
