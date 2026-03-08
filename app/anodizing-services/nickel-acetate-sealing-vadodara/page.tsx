import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("anodizing-services")!;

export const metadata: Metadata = {
  title: "nickel acetate sealing in Vadodara | Anodizing Services | VadodaraExperts",
  description: "Professional nickel acetate sealing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/anodizing-services/nickel-acetate-sealing-vadodara" },
  openGraph: {
    title: "nickel acetate sealing in Vadodara | VadodaraExperts",
    description: "Professional nickel acetate sealing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/anodizing-services/nickel-acetate-sealing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nickel-acetate-sealing-vadodara" />;
}
