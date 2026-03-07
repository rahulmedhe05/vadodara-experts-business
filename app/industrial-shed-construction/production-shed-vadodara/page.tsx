import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "production shed in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional production shed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/production-shed-vadodara" },
  openGraph: {
    title: "production shed in Vadodara | VadodaraExperts",
    description: "Professional production shed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/production-shed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="production-shed-vadodara" />;
}
