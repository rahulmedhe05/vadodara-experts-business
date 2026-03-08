import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "Restaurant Interior Design in Vadodara | VadodaraExperts",
  description: "Find the best restaurant interior design in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design" },
  openGraph: {
    title: "Restaurant Interior Design in Vadodara | VadodaraExperts",
    description: "Find the best restaurant interior design in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/restaurant-interior-design",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
