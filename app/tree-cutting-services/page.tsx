import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Tree Cutting Services in Vadodara | VadodaraExperts",
  description: "Find the best tree cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services" },
  openGraph: {
    title: "Tree Cutting Services in Vadodara | VadodaraExperts",
    description: "Find the best tree cutting services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/tree-cutting-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
