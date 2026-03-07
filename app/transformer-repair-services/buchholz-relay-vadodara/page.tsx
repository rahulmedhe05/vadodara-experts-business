import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "buchholz relay in Vadodara | Transformer Repair Services | VadodaraExperts",
  description: "Professional buchholz relay services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services/buchholz-relay-vadodara" },
  openGraph: {
    title: "buchholz relay in Vadodara | VadodaraExperts",
    description: "Professional buchholz relay services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/transformer-repair-services/buchholz-relay-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="buchholz-relay-vadodara" />;
}
