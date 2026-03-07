import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Single door fridge repair in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional single door fridge repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/single-door-fridge-repair-vadodara" },
  openGraph: {
    title: "Single door fridge repair in Vadodara | VadodaraExperts",
    description: "Professional single door fridge repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/single-door-fridge-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="single-door-fridge-repair-vadodara" />;
}
