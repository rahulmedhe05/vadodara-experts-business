import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Construction waste recycling in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional construction waste recycling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/construction-waste-recycling-vadodara" },
  openGraph: {
    title: "Construction waste recycling in Vadodara | VadodaraExperts",
    description: "Professional construction waste recycling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/construction-waste-recycling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-waste-recycling-vadodara" />;
}
