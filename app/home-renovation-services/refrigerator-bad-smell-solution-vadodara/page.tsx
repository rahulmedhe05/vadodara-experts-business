import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Refrigerator bad smell solution in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional refrigerator bad smell solution services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/refrigerator-bad-smell-solution-vadodara" },
  openGraph: {
    title: "Refrigerator bad smell solution in Vadodara | VadodaraExperts",
    description: "Professional refrigerator bad smell solution services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/refrigerator-bad-smell-solution-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="refrigerator-bad-smell-solution-vadodara" />;
}
