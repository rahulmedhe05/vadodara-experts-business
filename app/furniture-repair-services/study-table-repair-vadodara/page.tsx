import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Study table repair in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional study table repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/study-table-repair-vadodara" },
  openGraph: {
    title: "Study table repair in Vadodara | VadodaraExperts",
    description: "Professional study table repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/study-table-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="study-table-repair-vadodara" />;
}
