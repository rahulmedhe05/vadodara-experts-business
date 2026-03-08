import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "accident investigation in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional accident investigation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/accident-investigation-vadodara" },
  openGraph: {
    title: "accident investigation in Vadodara | VadodaraExperts",
    description: "Professional accident investigation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/accident-investigation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="accident-investigation-vadodara" />;
}
