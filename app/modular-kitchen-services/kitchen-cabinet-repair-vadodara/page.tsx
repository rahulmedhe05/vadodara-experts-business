import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Kitchen cabinet repair in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional kitchen cabinet repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/kitchen-cabinet-repair-vadodara" },
  openGraph: {
    title: "Kitchen cabinet repair in Vadodara | VadodaraExperts",
    description: "Professional kitchen cabinet repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/kitchen-cabinet-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-cabinet-repair-vadodara" />;
}
