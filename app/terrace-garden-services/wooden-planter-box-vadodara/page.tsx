import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Wooden planter box in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional wooden planter box services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/wooden-planter-box-vadodara" },
  openGraph: {
    title: "Wooden planter box in Vadodara | VadodaraExperts",
    description: "Professional wooden planter box services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/wooden-planter-box-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wooden-planter-box-vadodara" />;
}
