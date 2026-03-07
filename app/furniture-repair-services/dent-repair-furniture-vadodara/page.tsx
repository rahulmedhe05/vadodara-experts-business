import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Dent repair furniture in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional dent repair furniture services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/dent-repair-furniture-vadodara" },
  openGraph: {
    title: "Dent repair furniture in Vadodara | VadodaraExperts",
    description: "Professional dent repair furniture services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/dent-repair-furniture-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dent-repair-furniture-vadodara" />;
}
