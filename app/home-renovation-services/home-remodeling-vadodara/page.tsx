import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Home remodeling in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional home remodeling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/home-remodeling-vadodara" },
  openGraph: {
    title: "Home remodeling in Vadodara | VadodaraExperts",
    description: "Professional home remodeling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/home-remodeling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-remodeling-vadodara" />;
}
