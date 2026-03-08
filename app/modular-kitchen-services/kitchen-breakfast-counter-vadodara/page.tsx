import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Kitchen breakfast counter in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional kitchen breakfast counter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/kitchen-breakfast-counter-vadodara" },
  openGraph: {
    title: "Kitchen breakfast counter in Vadodara | VadodaraExperts",
    description: "Professional kitchen breakfast counter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/kitchen-breakfast-counter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-breakfast-counter-vadodara" />;
}
