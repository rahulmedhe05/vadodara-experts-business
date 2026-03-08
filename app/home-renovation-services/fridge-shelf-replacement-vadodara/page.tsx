import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Fridge shelf replacement in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional fridge shelf replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/fridge-shelf-replacement-vadodara" },
  openGraph: {
    title: "Fridge shelf replacement in Vadodara | VadodaraExperts",
    description: "Professional fridge shelf replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/fridge-shelf-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-shelf-replacement-vadodara" />;
}
