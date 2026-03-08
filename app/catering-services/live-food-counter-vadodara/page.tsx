import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Live food counter in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional live food counter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/live-food-counter-vadodara" },
  openGraph: {
    title: "Live food counter in Vadodara | VadodaraExperts",
    description: "Professional live food counter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/live-food-counter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="live-food-counter-vadodara" />;
}
