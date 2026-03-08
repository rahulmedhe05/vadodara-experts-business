import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Sofa re-upholstery in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional sofa re-upholstery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/sofa-re-upholstery-vadodara" },
  openGraph: {
    title: "Sofa re-upholstery in Vadodara | VadodaraExperts",
    description: "Professional sofa re-upholstery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/sofa-re-upholstery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sofa-re-upholstery-vadodara" />;
}
