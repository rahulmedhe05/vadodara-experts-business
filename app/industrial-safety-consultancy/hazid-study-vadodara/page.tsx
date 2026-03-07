import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "HAZID study in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional hazid study services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/hazid-study-vadodara" },
  openGraph: {
    title: "HAZID study in Vadodara | VadodaraExperts",
    description: "Professional hazid study services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/hazid-study-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hazid-study-vadodara" />;
}
