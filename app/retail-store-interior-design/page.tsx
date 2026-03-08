import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "Retail Store Interior Design in Vadodara | VadodaraExperts",
  description: "Find the best retail store interior design in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design" },
  openGraph: {
    title: "Retail Store Interior Design in Vadodara | VadodaraExperts",
    description: "Find the best retail store interior design in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/retail-store-interior-design",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
