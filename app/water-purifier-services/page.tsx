import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Water Purifier Services in Vadodara | VadodaraExperts",
  description: "Find the best water purifier services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services" },
  openGraph: {
    title: "Water Purifier Services in Vadodara | VadodaraExperts",
    description: "Find the best water purifier services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/water-purifier-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
