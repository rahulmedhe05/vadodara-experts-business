import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "Portable AC repair in Vadodara | AC Services | VadodaraExperts",
  description: "Professional portable ac repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/portable-ac-repair-vadodara" },
  openGraph: {
    title: "Portable AC repair in Vadodara | VadodaraExperts",
    description: "Professional portable ac repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/portable-ac-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="portable-ac-repair-vadodara" />;
}
