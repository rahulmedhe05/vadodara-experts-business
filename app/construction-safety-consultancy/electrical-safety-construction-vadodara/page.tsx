import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "electrical safety construction in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional electrical safety construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/electrical-safety-construction-vadodara" },
  openGraph: {
    title: "electrical safety construction in Vadodara | VadodaraExperts",
    description: "Professional electrical safety construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/electrical-safety-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-safety-construction-vadodara" />;
}
