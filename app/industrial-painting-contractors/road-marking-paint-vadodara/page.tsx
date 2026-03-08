import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "road marking paint in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional road marking paint services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/road-marking-paint-vadodara" },
  openGraph: {
    title: "road marking paint in Vadodara | VadodaraExperts",
    description: "Professional road marking paint services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/road-marking-paint-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="road-marking-paint-vadodara" />;
}
