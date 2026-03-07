import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Live pizza counter in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional live pizza counter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/live-pizza-counter-vadodara" },
  openGraph: {
    title: "Live pizza counter in Vadodara | VadodaraExperts",
    description: "Professional live pizza counter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/live-pizza-counter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="live-pizza-counter-vadodara" />;
}
