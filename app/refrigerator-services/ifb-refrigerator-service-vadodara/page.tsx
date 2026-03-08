import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "IFB refrigerator service in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional ifb refrigerator service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/ifb-refrigerator-service-vadodara" },
  openGraph: {
    title: "IFB refrigerator service in Vadodara | VadodaraExperts",
    description: "Professional ifb refrigerator service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/ifb-refrigerator-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ifb-refrigerator-service-vadodara" />;
}
