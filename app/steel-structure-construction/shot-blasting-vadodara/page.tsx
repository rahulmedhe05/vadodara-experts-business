import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "shot blasting in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional shot blasting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/shot-blasting-vadodara" },
  openGraph: {
    title: "shot blasting in Vadodara | VadodaraExperts",
    description: "Professional shot blasting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/shot-blasting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shot-blasting-vadodara" />;
}
