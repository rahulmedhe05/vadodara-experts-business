import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "industrial safety consultancy cost in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional industrial safety consultancy cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/industrial-safety-consultancy-cost-vadodara" },
  openGraph: {
    title: "industrial safety consultancy cost in Vadodara | VadodaraExperts",
    description: "Professional industrial safety consultancy cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/industrial-safety-consultancy-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-safety-consultancy-cost-vadodara" />;
}
