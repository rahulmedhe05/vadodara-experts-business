import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "third party coating inspection in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional third party coating inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/third-party-coating-inspection-vadodara" },
  openGraph: {
    title: "third party coating inspection in Vadodara | VadodaraExperts",
    description: "Professional third party coating inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/third-party-coating-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="third-party-coating-inspection-vadodara" />;
}
