import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Display cooler repair in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional display cooler repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/display-cooler-repair-vadodara" },
  openGraph: {
    title: "Display cooler repair in Vadodara | VadodaraExperts",
    description: "Professional display cooler repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/display-cooler-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="display-cooler-repair-vadodara" />;
}
