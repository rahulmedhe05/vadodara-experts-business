import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Home makeover in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional home makeover services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/home-makeover-vadodara" },
  openGraph: {
    title: "Home makeover in Vadodara | VadodaraExperts",
    description: "Professional home makeover services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/home-makeover-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-makeover-vadodara" />;
}
