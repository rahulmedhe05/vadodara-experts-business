import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "SWIFT payment in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional swift payment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/swift-payment-vadodara" },
  openGraph: {
    title: "SWIFT payment in Vadodara | VadodaraExperts",
    description: "Professional swift payment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/swift-payment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="swift-payment-vadodara" />;
}
