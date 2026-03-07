import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "acrylic industrial paint in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional acrylic industrial paint services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/acrylic-industrial-paint-vadodara" },
  openGraph: {
    title: "acrylic industrial paint in Vadodara | VadodaraExperts",
    description: "Professional acrylic industrial paint services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/acrylic-industrial-paint-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="acrylic-industrial-paint-vadodara" />;
}
