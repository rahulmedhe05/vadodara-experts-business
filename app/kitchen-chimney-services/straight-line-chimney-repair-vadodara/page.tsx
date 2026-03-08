import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Straight line chimney repair in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional straight line chimney repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/straight-line-chimney-repair-vadodara" },
  openGraph: {
    title: "Straight line chimney repair in Vadodara | VadodaraExperts",
    description: "Professional straight line chimney repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/straight-line-chimney-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="straight-line-chimney-repair-vadodara" />;
}
