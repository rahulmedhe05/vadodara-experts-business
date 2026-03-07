import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Fridge temperature fluctuation in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional fridge temperature fluctuation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/fridge-temperature-fluctuation-vadodara" },
  openGraph: {
    title: "Fridge temperature fluctuation in Vadodara | VadodaraExperts",
    description: "Professional fridge temperature fluctuation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/fridge-temperature-fluctuation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-temperature-fluctuation-vadodara" />;
}
