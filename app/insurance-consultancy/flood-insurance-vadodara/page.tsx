import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Flood insurance in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional flood insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/flood-insurance-vadodara" },
  openGraph: {
    title: "Flood insurance in Vadodara | VadodaraExperts",
    description: "Professional flood insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/flood-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flood-insurance-vadodara" />;
}
