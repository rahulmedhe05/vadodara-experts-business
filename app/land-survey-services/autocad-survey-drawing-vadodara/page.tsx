import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "AutoCAD survey drawing in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional autocad survey drawing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/autocad-survey-drawing-vadodara" },
  openGraph: {
    title: "AutoCAD survey drawing in Vadodara | VadodaraExperts",
    description: "Professional autocad survey drawing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/autocad-survey-drawing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="autocad-survey-drawing-vadodara" />;
}
