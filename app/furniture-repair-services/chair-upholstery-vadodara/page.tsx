import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Chair upholstery in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional chair upholstery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/chair-upholstery-vadodara" },
  openGraph: {
    title: "Chair upholstery in Vadodara | VadodaraExperts",
    description: "Professional chair upholstery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/chair-upholstery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chair-upholstery-vadodara" />;
}
