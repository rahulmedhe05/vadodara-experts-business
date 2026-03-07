import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Furniture restoration in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional furniture restoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/furniture-restoration-vadodara" },
  openGraph: {
    title: "Furniture restoration in Vadodara | VadodaraExperts",
    description: "Professional furniture restoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/furniture-restoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="furniture-restoration-vadodara" />;
}
