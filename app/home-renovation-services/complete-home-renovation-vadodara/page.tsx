import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Complete home renovation in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional complete home renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/complete-home-renovation-vadodara" },
  openGraph: {
    title: "Complete home renovation in Vadodara | VadodaraExperts",
    description: "Professional complete home renovation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/complete-home-renovation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="complete-home-renovation-vadodara" />;
}
