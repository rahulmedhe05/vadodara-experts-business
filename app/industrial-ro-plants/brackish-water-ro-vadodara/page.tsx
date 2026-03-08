import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-ro-plants")!;

export const metadata: Metadata = {
  title: "brackish water RO in Vadodara | Industrial RO Plants | VadodaraExperts",
  description: "Professional brackish water ro services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-ro-plants/brackish-water-ro-vadodara" },
  openGraph: {
    title: "brackish water RO in Vadodara | VadodaraExperts",
    description: "Professional brackish water ro services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-ro-plants/brackish-water-ro-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="brackish-water-ro-vadodara" />;
}
