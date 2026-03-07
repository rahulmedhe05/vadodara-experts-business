import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Wooden door repair in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional wooden door repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/wooden-door-repair-vadodara" },
  openGraph: {
    title: "Wooden door repair in Vadodara | VadodaraExperts",
    description: "Professional wooden door repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/wooden-door-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wooden-door-repair-vadodara" />;
}
