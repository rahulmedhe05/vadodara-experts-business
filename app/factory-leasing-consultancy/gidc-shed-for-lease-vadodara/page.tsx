import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "GIDC shed for lease in Vadodara | Factory Leasing Consultancy | VadodaraExperts",
  description: "Professional gidc shed for lease services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-consultancy/gidc-shed-for-lease-vadodara" },
  openGraph: {
    title: "GIDC shed for lease in Vadodara | VadodaraExperts",
    description: "Professional gidc shed for lease services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-consultancy/gidc-shed-for-lease-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gidc-shed-for-lease-vadodara" />;
}
