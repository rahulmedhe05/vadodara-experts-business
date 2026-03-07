import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "cable ladder in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional cable ladder services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/cable-ladder-vadodara" },
  openGraph: {
    title: "cable ladder in Vadodara | VadodaraExperts",
    description: "Professional cable ladder services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/cable-ladder-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cable-ladder-vadodara" />;
}
