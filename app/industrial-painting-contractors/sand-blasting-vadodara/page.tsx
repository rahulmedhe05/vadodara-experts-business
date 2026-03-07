import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "sand blasting in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional sand blasting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/sand-blasting-vadodara" },
  openGraph: {
    title: "sand blasting in Vadodara | VadodaraExperts",
    description: "Professional sand blasting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/sand-blasting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sand-blasting-vadodara" />;
}
