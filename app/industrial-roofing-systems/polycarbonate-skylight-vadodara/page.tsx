import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "polycarbonate skylight in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional polycarbonate skylight services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/polycarbonate-skylight-vadodara" },
  openGraph: {
    title: "polycarbonate skylight in Vadodara | VadodaraExperts",
    description: "Professional polycarbonate skylight services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/polycarbonate-skylight-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="polycarbonate-skylight-vadodara" />;
}
