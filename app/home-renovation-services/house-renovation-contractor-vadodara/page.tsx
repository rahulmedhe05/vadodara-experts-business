import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "House renovation contractor in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional house renovation contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/house-renovation-contractor-vadodara" },
  openGraph: {
    title: "House renovation contractor in Vadodara | VadodaraExperts",
    description: "Professional house renovation contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/house-renovation-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="house-renovation-contractor-vadodara" />;
}
