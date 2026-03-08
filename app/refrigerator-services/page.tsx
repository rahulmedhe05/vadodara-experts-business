import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Refrigerator Services in Vadodara | VadodaraExperts",
  description: "Find the best refrigerator services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services" },
  openGraph: {
    title: "Refrigerator Services in Vadodara | VadodaraExperts",
    description: "Find the best refrigerator services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/refrigerator-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
