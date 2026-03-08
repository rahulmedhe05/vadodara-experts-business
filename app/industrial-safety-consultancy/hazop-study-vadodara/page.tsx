import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "HAZOP study in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional hazop study services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/hazop-study-vadodara" },
  openGraph: {
    title: "HAZOP study in Vadodara | VadodaraExperts",
    description: "Professional hazop study services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/hazop-study-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hazop-study-vadodara" />;
}
