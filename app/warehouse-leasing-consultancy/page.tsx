import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "Warehouse Leasing Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best warehouse leasing consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-consultancy" },
  openGraph: {
    title: "Warehouse Leasing Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best warehouse leasing consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/warehouse-leasing-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
