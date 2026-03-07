import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Roof repair renovation in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional roof repair renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/roof-repair-renovation-vadodara" },
  openGraph: {
    title: "Roof repair renovation in Vadodara | VadodaraExperts",
    description: "Professional roof repair renovation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/roof-repair-renovation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-repair-renovation-vadodara" />;
}
