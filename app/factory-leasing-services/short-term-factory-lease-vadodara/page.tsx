import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "short term factory lease in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional short term factory lease services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/short-term-factory-lease-vadodara" },
  openGraph: {
    title: "short term factory lease in Vadodara | VadodaraExperts",
    description: "Professional short term factory lease services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/short-term-factory-lease-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="short-term-factory-lease-vadodara" />;
}
