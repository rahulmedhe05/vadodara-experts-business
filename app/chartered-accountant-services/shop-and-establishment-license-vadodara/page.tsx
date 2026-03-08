import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Shop and establishment license in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional shop and establishment license services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/shop-and-establishment-license-vadodara" },
  openGraph: {
    title: "Shop and establishment license in Vadodara | VadodaraExperts",
    description: "Professional shop and establishment license services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/shop-and-establishment-license-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shop-and-establishment-license-vadodara" />;
}
