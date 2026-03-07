import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pest-control-services")!;

export const metadata: Metadata = {
  title: "Wooden furniture fumigation in Vadodara | Pest Control Services | VadodaraExperts",
  description: "Professional wooden furniture fumigation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pest-control-services/wooden-furniture-fumigation-vadodara" },
  openGraph: {
    title: "Wooden furniture fumigation in Vadodara | VadodaraExperts",
    description: "Professional wooden furniture fumigation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pest-control-services/wooden-furniture-fumigation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wooden-furniture-fumigation-vadodara" />;
}
