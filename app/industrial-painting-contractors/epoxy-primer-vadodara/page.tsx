import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "epoxy primer in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional epoxy primer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/epoxy-primer-vadodara" },
  openGraph: {
    title: "epoxy primer in Vadodara | VadodaraExperts",
    description: "Professional epoxy primer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/epoxy-primer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="epoxy-primer-vadodara" />;
}
