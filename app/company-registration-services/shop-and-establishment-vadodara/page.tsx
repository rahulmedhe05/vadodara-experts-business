import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Shop and establishment in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional shop and establishment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/shop-and-establishment-vadodara" },
  openGraph: {
    title: "Shop and establishment in Vadodara | VadodaraExperts",
    description: "Professional shop and establishment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/shop-and-establishment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shop-and-establishment-vadodara" />;
}
