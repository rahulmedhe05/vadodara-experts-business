import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("luxury-villa-construction")!;

export const metadata: Metadata = {
  title: "second home construction in Vadodara | Luxury Villa Construction | VadodaraExperts",
  description: "Professional second home construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/luxury-villa-construction/second-home-construction-vadodara" },
  openGraph: {
    title: "second home construction in Vadodara | VadodaraExperts",
    description: "Professional second home construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/luxury-villa-construction/second-home-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="second-home-construction-vadodara" />;
}
