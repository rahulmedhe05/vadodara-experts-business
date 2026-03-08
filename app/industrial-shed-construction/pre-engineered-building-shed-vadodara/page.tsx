import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "pre-engineered building shed in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional pre-engineered building shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/pre-engineered-building-shed-vadodara" },
  openGraph: {
    title: "pre-engineered building shed in Vadodara | VadodaraExperts",
    description: "Professional pre-engineered building shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/pre-engineered-building-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-engineered-building-shed-vadodara" />;
}
