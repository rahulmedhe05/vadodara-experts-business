import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Profit and loss statement in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional profit and loss statement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/profit-and-loss-statement-vadodara" },
  openGraph: {
    title: "Profit and loss statement in Vadodara | VadodaraExperts",
    description: "Professional profit and loss statement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/profit-and-loss-statement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="profit-and-loss-statement-vadodara" />;
}
