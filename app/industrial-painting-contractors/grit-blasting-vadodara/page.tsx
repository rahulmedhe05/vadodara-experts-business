import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "grit blasting in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional grit blasting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/grit-blasting-vadodara" },
  openGraph: {
    title: "grit blasting in Vadodara | VadodaraExperts",
    description: "Professional grit blasting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/grit-blasting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="grit-blasting-vadodara" />;
}
