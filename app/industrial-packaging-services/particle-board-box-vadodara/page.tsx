import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "particle board box in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional particle board box services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/particle-board-box-vadodara" },
  openGraph: {
    title: "particle board box in Vadodara | VadodaraExperts",
    description: "Professional particle board box services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/particle-board-box-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="particle-board-box-vadodara" />;
}
