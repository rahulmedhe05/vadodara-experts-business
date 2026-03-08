import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "steel structure erection in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional steel structure erection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/steel-structure-erection-vadodara" },
  openGraph: {
    title: "steel structure erection in Vadodara | VadodaraExperts",
    description: "Professional steel structure erection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/steel-structure-erection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-structure-erection-vadodara" />;
}
