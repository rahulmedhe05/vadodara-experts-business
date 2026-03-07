import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "triple wall corrugated in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional triple wall corrugated services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/triple-wall-corrugated-vadodara" },
  openGraph: {
    title: "triple wall corrugated in Vadodara | VadodaraExperts",
    description: "Professional triple wall corrugated services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/triple-wall-corrugated-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="triple-wall-corrugated-vadodara" />;
}
