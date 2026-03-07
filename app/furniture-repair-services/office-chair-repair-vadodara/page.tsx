import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Office chair repair in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional office chair repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/office-chair-repair-vadodara" },
  openGraph: {
    title: "Office chair repair in Vadodara | VadodaraExperts",
    description: "Professional office chair repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/office-chair-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-chair-repair-vadodara" />;
}
