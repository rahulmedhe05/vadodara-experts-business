import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "3 BHK villa construction in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional 3 bhk villa construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/3-bhk-villa-construction-vadodara" },
  openGraph: {
    title: "3 BHK villa construction in Vadodara | VadodaraExperts",
    description: "Professional 3 bhk villa construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/3-bhk-villa-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3-bhk-villa-construction-vadodara" />;
}
