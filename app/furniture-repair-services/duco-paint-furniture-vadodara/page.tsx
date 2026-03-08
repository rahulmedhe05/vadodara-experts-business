import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Duco paint furniture in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional duco paint furniture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/duco-paint-furniture-vadodara" },
  openGraph: {
    title: "Duco paint furniture in Vadodara | VadodaraExperts",
    description: "Professional duco paint furniture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/duco-paint-furniture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="duco-paint-furniture-vadodara" />;
}
