import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("furniture-repair-services")!;

export const metadata: Metadata = {
  title: "Wood polish in Vadodara | Furniture Repair Services | VadodaraExperts",
  description: "Professional wood polish services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/furniture-repair-services/wood-polish-vadodara" },
  openGraph: {
    title: "Wood polish in Vadodara | VadodaraExperts",
    description: "Professional wood polish services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/furniture-repair-services/wood-polish-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wood-polish-vadodara" />;
}
