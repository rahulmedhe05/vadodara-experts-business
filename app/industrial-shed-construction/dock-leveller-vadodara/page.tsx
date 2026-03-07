import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "dock leveller in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional dock leveller services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/dock-leveller-vadodara" },
  openGraph: {
    title: "dock leveller in Vadodara | VadodaraExperts",
    description: "Professional dock leveller services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/dock-leveller-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dock-leveller-vadodara" />;
}
