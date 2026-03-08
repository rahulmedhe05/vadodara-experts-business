import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "plywood pallet in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional plywood pallet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/plywood-pallet-vadodara" },
  openGraph: {
    title: "plywood pallet in Vadodara | VadodaraExperts",
    description: "Professional plywood pallet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/plywood-pallet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plywood-pallet-vadodara" />;
}
