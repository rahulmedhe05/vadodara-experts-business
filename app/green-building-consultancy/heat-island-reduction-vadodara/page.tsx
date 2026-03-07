import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "heat island reduction in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional heat island reduction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/heat-island-reduction-vadodara" },
  openGraph: {
    title: "heat island reduction in Vadodara | VadodaraExperts",
    description: "Professional heat island reduction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/heat-island-reduction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heat-island-reduction-vadodara" />;
}
