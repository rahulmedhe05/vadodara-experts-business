import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "over dimensional cargo in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional over dimensional cargo services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/over-dimensional-cargo-vadodara" },
  openGraph: {
    title: "over dimensional cargo in Vadodara | VadodaraExperts",
    description: "Professional over dimensional cargo services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/over-dimensional-cargo-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="over-dimensional-cargo-vadodara" />;
}
