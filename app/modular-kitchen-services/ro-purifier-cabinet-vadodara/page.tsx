import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "RO purifier cabinet in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional ro purifier cabinet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/ro-purifier-cabinet-vadodara" },
  openGraph: {
    title: "RO purifier cabinet in Vadodara | VadodaraExperts",
    description: "Professional ro purifier cabinet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/ro-purifier-cabinet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-purifier-cabinet-vadodara" />;
}
