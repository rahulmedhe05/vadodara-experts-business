import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Mold removal service in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional mold removal service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/mold-removal-service-vadodara" },
  openGraph: {
    title: "Mold removal service in Vadodara | VadodaraExperts",
    description: "Professional mold removal service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/mold-removal-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mold-removal-service-vadodara" />;
}
