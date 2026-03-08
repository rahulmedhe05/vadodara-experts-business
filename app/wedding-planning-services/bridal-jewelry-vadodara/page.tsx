import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wedding-planning-services")!;

export const metadata: Metadata = {
  title: "Bridal jewelry in Vadodara | Wedding Planning Services | VadodaraExperts",
  description: "Professional bridal jewelry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wedding-planning-services/bridal-jewelry-vadodara" },
  openGraph: {
    title: "Bridal jewelry in Vadodara | VadodaraExperts",
    description: "Professional bridal jewelry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wedding-planning-services/bridal-jewelry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bridal-jewelry-vadodara" />;
}
