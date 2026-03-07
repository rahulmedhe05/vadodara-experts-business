import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Garage renovation in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional garage renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/garage-renovation-vadodara" },
  openGraph: {
    title: "Garage renovation in Vadodara | VadodaraExperts",
    description: "Professional garage renovation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/garage-renovation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="garage-renovation-vadodara" />;
}
