import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-painting-contractors")!;

export const metadata: Metadata = {
  title: "profile measurement in Vadodara | Industrial Painting Contractors | VadodaraExperts",
  description: "Professional profile measurement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-painting-contractors/profile-measurement-vadodara" },
  openGraph: {
    title: "profile measurement in Vadodara | VadodaraExperts",
    description: "Professional profile measurement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-painting-contractors/profile-measurement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="profile-measurement-vadodara" />;
}
