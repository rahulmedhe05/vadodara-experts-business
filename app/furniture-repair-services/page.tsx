import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Furniture Repair Services in Vadodara | VadodaraExperts",
  description: "Find the best furniture repair services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services" },
  openGraph: {
    title: "Furniture Repair Services in Vadodara | VadodaraExperts",
    description: "Find the best furniture repair services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/furniture-repair-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
