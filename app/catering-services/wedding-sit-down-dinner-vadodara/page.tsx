import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Wedding sit down dinner in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional wedding sit down dinner services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/wedding-sit-down-dinner-vadodara" },
  openGraph: {
    title: "Wedding sit down dinner in Vadodara | VadodaraExperts",
    description: "Professional wedding sit down dinner services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/wedding-sit-down-dinner-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-sit-down-dinner-vadodara" />;
}
