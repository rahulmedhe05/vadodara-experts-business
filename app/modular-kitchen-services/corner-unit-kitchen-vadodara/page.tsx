import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Corner unit kitchen in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional corner unit kitchen services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/corner-unit-kitchen-vadodara" },
  openGraph: {
    title: "Corner unit kitchen in Vadodara | VadodaraExperts",
    description: "Professional corner unit kitchen services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/corner-unit-kitchen-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corner-unit-kitchen-vadodara" />;
}
