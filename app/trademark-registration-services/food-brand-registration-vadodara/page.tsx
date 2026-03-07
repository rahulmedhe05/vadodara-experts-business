import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Food brand registration in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional food brand registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/food-brand-registration-vadodara" },
  openGraph: {
    title: "Food brand registration in Vadodara | VadodaraExperts",
    description: "Professional food brand registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/food-brand-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="food-brand-registration-vadodara" />;
}
