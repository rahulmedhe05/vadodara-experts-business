import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Slab repair in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional slab repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/slab-repair-vadodara" },
  openGraph: {
    title: "Slab repair in Vadodara | VadodaraExperts",
    description: "Professional slab repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/slab-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="slab-repair-vadodara" />;
}
