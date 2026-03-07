import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Wood waste recycling in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional wood waste recycling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/wood-waste-recycling-vadodara" },
  openGraph: {
    title: "Wood waste recycling in Vadodara | VadodaraExperts",
    description: "Professional wood waste recycling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/wood-waste-recycling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wood-waste-recycling-vadodara" />;
}
