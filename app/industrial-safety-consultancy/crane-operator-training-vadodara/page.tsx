import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "crane operator training in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional crane operator training services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/crane-operator-training-vadodara" },
  openGraph: {
    title: "crane operator training in Vadodara | VadodaraExperts",
    description: "Professional crane operator training services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/crane-operator-training-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="crane-operator-training-vadodara" />;
}
