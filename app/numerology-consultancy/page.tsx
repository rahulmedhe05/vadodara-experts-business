import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("numerology-consultancy")!;

export const metadata: Metadata = {
  title: "Numerology Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best numerology consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/numerology-consultancy" },
  openGraph: {
    title: "Numerology Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best numerology consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/numerology-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
