import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "plywood crate in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional plywood crate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/plywood-crate-vadodara" },
  openGraph: {
    title: "plywood crate in Vadodara | VadodaraExperts",
    description: "Professional plywood crate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/plywood-crate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plywood-crate-vadodara" />;
}
