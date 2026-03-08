import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "industrial safety company in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional industrial safety company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/industrial-safety-company-vadodara" },
  openGraph: {
    title: "industrial safety company in Vadodara | VadodaraExperts",
    description: "Professional industrial safety company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/industrial-safety-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-safety-company-vadodara" />;
}
