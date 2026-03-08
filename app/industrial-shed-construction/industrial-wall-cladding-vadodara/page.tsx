import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "industrial wall cladding in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional industrial wall cladding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/industrial-wall-cladding-vadodara" },
  openGraph: {
    title: "industrial wall cladding in Vadodara | VadodaraExperts",
    description: "Professional industrial wall cladding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/industrial-wall-cladding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-wall-cladding-vadodara" />;
}
