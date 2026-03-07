import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Anti bacterial treatment in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional anti bacterial treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/anti-bacterial-treatment-vadodara" },
  openGraph: {
    title: "Anti bacterial treatment in Vadodara | VadodaraExperts",
    description: "Professional anti bacterial treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/anti-bacterial-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-bacterial-treatment-vadodara" />;
}
