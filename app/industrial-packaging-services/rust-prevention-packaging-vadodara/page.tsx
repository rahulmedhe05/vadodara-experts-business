import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "rust prevention packaging in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional rust prevention packaging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/rust-prevention-packaging-vadodara" },
  openGraph: {
    title: "rust prevention packaging in Vadodara | VadodaraExperts",
    description: "Professional rust prevention packaging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/rust-prevention-packaging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rust-prevention-packaging-vadodara" />;
}
