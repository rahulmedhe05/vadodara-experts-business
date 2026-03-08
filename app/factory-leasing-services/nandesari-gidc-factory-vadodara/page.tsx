import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "Nandesari GIDC factory in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional nandesari gidc factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/nandesari-gidc-factory-vadodara" },
  openGraph: {
    title: "Nandesari GIDC factory in Vadodara | VadodaraExperts",
    description: "Professional nandesari gidc factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/nandesari-gidc-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nandesari-gidc-factory-vadodara" />;
}
