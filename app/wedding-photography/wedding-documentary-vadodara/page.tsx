import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-photography")!;

export const metadata: Metadata = {
  title: "Wedding documentary in Vadodara | Wedding Photography | VadodaraExperts",
  description: "Professional wedding documentary services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-photography/wedding-documentary-vadodara" },
  openGraph: {
    title: "Wedding documentary in Vadodara | VadodaraExperts",
    description: "Professional wedding documentary services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-photography/wedding-documentary-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-documentary-vadodara" />;
}
