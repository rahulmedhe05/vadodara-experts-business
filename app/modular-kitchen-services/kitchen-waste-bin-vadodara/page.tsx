import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Kitchen waste bin in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional kitchen waste bin services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/kitchen-waste-bin-vadodara" },
  openGraph: {
    title: "Kitchen waste bin in Vadodara | VadodaraExperts",
    description: "Professional kitchen waste bin services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/kitchen-waste-bin-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-waste-bin-vadodara" />;
}
