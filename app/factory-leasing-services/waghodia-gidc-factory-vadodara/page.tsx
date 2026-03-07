import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "Waghodia GIDC factory in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional waghodia gidc factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/waghodia-gidc-factory-vadodara" },
  openGraph: {
    title: "Waghodia GIDC factory in Vadodara | VadodaraExperts",
    description: "Professional waghodia gidc factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/waghodia-gidc-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="waghodia-gidc-factory-vadodara" />;
}
