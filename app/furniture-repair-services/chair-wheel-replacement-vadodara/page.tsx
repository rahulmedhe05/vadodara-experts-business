import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Chair wheel replacement in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional chair wheel replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/chair-wheel-replacement-vadodara" },
  openGraph: {
    title: "Chair wheel replacement in Vadodara | VadodaraExperts",
    description: "Professional chair wheel replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/chair-wheel-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chair-wheel-replacement-vadodara" />;
}
