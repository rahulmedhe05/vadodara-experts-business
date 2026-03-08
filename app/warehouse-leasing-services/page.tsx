import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "Warehouse Leasing Services in Vadodara | VadodaraExperts",
  description: "Find the best warehouse leasing services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services" },
  openGraph: {
    title: "Warehouse Leasing Services in Vadodara | VadodaraExperts",
    description: "Find the best warehouse leasing services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
