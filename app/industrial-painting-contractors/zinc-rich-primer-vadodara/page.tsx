import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "zinc rich primer in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional zinc rich primer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/zinc-rich-primer-vadodara" },
  openGraph: {
    title: "zinc rich primer in Vadodara | VadodaraExperts",
    description: "Professional zinc rich primer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/zinc-rich-primer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zinc-rich-primer-vadodara" />;
}
