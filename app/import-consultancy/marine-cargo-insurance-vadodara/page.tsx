import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Marine cargo insurance in Vadodara | Import Consultancy | VadodaraExperts",
  description: "Professional marine cargo insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy/marine-cargo-insurance-vadodara" },
  openGraph: {
    title: "Marine cargo insurance in Vadodara | VadodaraExperts",
    description: "Professional marine cargo insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/import-consultancy/marine-cargo-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marine-cargo-insurance-vadodara" />;
}
