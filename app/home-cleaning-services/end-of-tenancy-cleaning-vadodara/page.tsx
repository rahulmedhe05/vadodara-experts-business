import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "End of tenancy cleaning in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional end of tenancy cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/end-of-tenancy-cleaning-vadodara" },
  openGraph: {
    title: "End of tenancy cleaning in Vadodara | VadodaraExperts",
    description: "Professional end of tenancy cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/end-of-tenancy-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="end-of-tenancy-cleaning-vadodara" />;
}
