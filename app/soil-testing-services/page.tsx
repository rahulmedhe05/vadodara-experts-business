import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "Soil Testing Services in Vadodara | VadodaraExperts",
  description: "Find the best soil testing services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services" },
  openGraph: {
    title: "Soil Testing Services in Vadodara | VadodaraExperts",
    description: "Find the best soil testing services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/soil-testing-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
