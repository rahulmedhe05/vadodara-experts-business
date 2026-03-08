import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("abrasive-grinding-suppliers")!;

export const metadata: Metadata = {
  title: "Abrasive Grinding Suppliers in Vadodara | VadodaraExperts",
  description: "Find the best abrasive grinding suppliers in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/abrasive-grinding-suppliers" },
  openGraph: {
    title: "Abrasive Grinding Suppliers in Vadodara | VadodaraExperts",
    description: "Find the best abrasive grinding suppliers in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/abrasive-grinding-suppliers",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
