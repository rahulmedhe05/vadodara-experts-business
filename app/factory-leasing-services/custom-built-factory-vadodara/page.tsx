import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "custom built factory in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional custom built factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/custom-built-factory-vadodara" },
  openGraph: {
    title: "custom built factory in Vadodara | VadodaraExperts",
    description: "Professional custom built factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/custom-built-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="custom-built-factory-vadodara" />;
}
