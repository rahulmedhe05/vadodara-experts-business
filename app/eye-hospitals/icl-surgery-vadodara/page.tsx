import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "ICL surgery in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional icl surgery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/icl-surgery-vadodara" },
  openGraph: {
    title: "ICL surgery in Vadodara | VadodaraExperts",
    description: "Professional icl surgery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/icl-surgery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="icl-surgery-vadodara" />;
}
