import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "energy efficient villa in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional energy efficient villa services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/energy-efficient-villa-vadodara" },
  openGraph: {
    title: "energy efficient villa in Vadodara | VadodaraExperts",
    description: "Professional energy efficient villa services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/energy-efficient-villa-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="energy-efficient-villa-vadodara" />;
}
