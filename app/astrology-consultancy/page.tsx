import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "Astrology Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best astrology consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy" },
  openGraph: {
    title: "Astrology Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best astrology consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/astrology-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
