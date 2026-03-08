import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "best factory leasing in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional best factory leasing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/best-factory-leasing-vadodara" },
  openGraph: {
    title: "best factory leasing in Vadodara | VadodaraExperts",
    description: "Professional best factory leasing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/best-factory-leasing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-factory-leasing-vadodara" />;
}
