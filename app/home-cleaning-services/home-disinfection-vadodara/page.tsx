import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Home disinfection in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional home disinfection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/home-disinfection-vadodara" },
  openGraph: {
    title: "Home disinfection in Vadodara | VadodaraExperts",
    description: "Professional home disinfection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/home-disinfection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-disinfection-vadodara" />;
}
