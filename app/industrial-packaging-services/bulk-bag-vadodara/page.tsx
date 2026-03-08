import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "bulk bag in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional bulk bag services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/bulk-bag-vadodara" },
  openGraph: {
    title: "bulk bag in Vadodara | VadodaraExperts",
    description: "Professional bulk bag services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/bulk-bag-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bulk-bag-vadodara" />;
}
