import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "roller painting industrial in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional roller painting industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/roller-painting-industrial-vadodara" },
  openGraph: {
    title: "roller painting industrial in Vadodara | VadodaraExperts",
    description: "Professional roller painting industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/roller-painting-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roller-painting-industrial-vadodara" />;
}
