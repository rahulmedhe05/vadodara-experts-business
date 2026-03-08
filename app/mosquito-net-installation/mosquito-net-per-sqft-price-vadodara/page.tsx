import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Mosquito net per sqft price in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional mosquito net per sqft price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/mosquito-net-per-sqft-price-vadodara" },
  openGraph: {
    title: "Mosquito net per sqft price in Vadodara | VadodaraExperts",
    description: "Professional mosquito net per sqft price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/mosquito-net-per-sqft-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mosquito-net-per-sqft-price-vadodara" />;
}
