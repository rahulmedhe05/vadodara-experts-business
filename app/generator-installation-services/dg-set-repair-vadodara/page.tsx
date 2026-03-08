import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "DG set repair in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional dg set repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/dg-set-repair-vadodara" },
  openGraph: {
    title: "DG set repair in Vadodara | VadodaraExperts",
    description: "Professional dg set repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/dg-set-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dg-set-repair-vadodara" />;
}
