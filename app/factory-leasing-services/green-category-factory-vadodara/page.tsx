import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "green category factory in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional green category factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/green-category-factory-vadodara" },
  openGraph: {
    title: "green category factory in Vadodara | VadodaraExperts",
    description: "Professional green category factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/green-category-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="green-category-factory-vadodara" />;
}
