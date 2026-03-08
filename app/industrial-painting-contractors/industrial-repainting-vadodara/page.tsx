import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "industrial repainting in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional industrial repainting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/industrial-repainting-vadodara" },
  openGraph: {
    title: "industrial repainting in Vadodara | VadodaraExperts",
    description: "Professional industrial repainting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/industrial-repainting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-repainting-vadodara" />;
}
