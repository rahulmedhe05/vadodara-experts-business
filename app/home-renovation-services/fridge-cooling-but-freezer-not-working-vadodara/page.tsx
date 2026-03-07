import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Fridge cooling but freezer not working in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional fridge cooling but freezer not working services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/fridge-cooling-but-freezer-not-working-vadodara" },
  openGraph: {
    title: "Fridge cooling but freezer not working in Vadodara | VadodaraExperts",
    description: "Professional fridge cooling but freezer not working services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/fridge-cooling-but-freezer-not-working-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fridge-cooling-but-freezer-not-working-vadodara" />;
}
