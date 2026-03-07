import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "ODC cargo packaging in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional odc cargo packaging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/odc-cargo-packaging-vadodara" },
  openGraph: {
    title: "ODC cargo packaging in Vadodara | VadodaraExperts",
    description: "Professional odc cargo packaging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/odc-cargo-packaging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="odc-cargo-packaging-vadodara" />;
}
