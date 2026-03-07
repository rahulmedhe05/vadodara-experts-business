import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Fridge odor removal in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional fridge odor removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/fridge-odor-removal-vadodara" },
  openGraph: {
    title: "Fridge odor removal in Vadodara | VadodaraExperts",
    description: "Professional fridge odor removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/fridge-odor-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-odor-removal-vadodara" />;
}
