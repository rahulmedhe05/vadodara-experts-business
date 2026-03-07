import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Chair gas lift replacement in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional chair gas lift replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/chair-gas-lift-replacement-vadodara" },
  openGraph: {
    title: "Chair gas lift replacement in Vadodara | VadodaraExperts",
    description: "Professional chair gas lift replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/chair-gas-lift-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chair-gas-lift-replacement-vadodara" />;
}
