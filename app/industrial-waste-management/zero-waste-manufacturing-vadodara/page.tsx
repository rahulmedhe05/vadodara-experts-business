import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Zero waste manufacturing in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional zero waste manufacturing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/zero-waste-manufacturing-vadodara" },
  openGraph: {
    title: "Zero waste manufacturing in Vadodara | VadodaraExperts",
    description: "Professional zero waste manufacturing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/zero-waste-manufacturing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zero-waste-manufacturing-vadodara" />;
}
