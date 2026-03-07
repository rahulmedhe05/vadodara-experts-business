import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "pine wood box in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional pine wood box services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/pine-wood-box-vadodara" },
  openGraph: {
    title: "pine wood box in Vadodara | VadodaraExperts",
    description: "Professional pine wood box services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/pine-wood-box-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pine-wood-box-vadodara" />;
}
