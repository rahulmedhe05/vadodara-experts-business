import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "DG set on rent in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional dg set on rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/dg-set-on-rent-vadodara" },
  openGraph: {
    title: "DG set on rent in Vadodara | VadodaraExperts",
    description: "Professional dg set on rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/dg-set-on-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dg-set-on-rent-vadodara" />;
}
