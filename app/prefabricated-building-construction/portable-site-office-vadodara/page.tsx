import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "portable site office in Vadodara | Prefabricated Building Construction | VadodaraExperts",
  description: "Professional portable site office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction/portable-site-office-vadodara" },
  openGraph: {
    title: "portable site office in Vadodara | VadodaraExperts",
    description: "Professional portable site office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction/portable-site-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="portable-site-office-vadodara" />;
}
