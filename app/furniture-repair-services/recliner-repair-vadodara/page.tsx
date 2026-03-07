import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Recliner repair in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional recliner repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/recliner-repair-vadodara" },
  openGraph: {
    title: "Recliner repair in Vadodara | VadodaraExperts",
    description: "Professional recliner repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/recliner-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="recliner-repair-vadodara" />;
}
