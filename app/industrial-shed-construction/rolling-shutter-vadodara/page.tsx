import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "rolling shutter in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional rolling shutter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/rolling-shutter-vadodara" },
  openGraph: {
    title: "rolling shutter in Vadodara | VadodaraExperts",
    description: "Professional rolling shutter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/rolling-shutter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rolling-shutter-vadodara" />;
}
