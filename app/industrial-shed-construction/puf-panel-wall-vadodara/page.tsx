import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "PUF panel wall in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional puf panel wall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/puf-panel-wall-vadodara" },
  openGraph: {
    title: "PUF panel wall in Vadodara | VadodaraExperts",
    description: "Professional puf panel wall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/puf-panel-wall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="puf-panel-wall-vadodara" />;
}
