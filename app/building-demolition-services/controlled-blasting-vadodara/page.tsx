import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-demolition-services")!;

export const metadata: Metadata = {
  title: "controlled blasting in Vadodara | Building Demolition Services | VadodaraExperts",
  description: "Professional controlled blasting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-demolition-services/controlled-blasting-vadodara" },
  openGraph: {
    title: "controlled blasting in Vadodara | VadodaraExperts",
    description: "Professional controlled blasting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-demolition-services/controlled-blasting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="controlled-blasting-vadodara" />;
}
