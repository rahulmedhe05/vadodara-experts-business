import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "shop electrical work in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional shop electrical work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/shop-electrical-work-vadodara" },
  openGraph: {
    title: "shop electrical work in Vadodara | VadodaraExperts",
    description: "Professional shop electrical work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/shop-electrical-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shop-electrical-work-vadodara" />;
}
