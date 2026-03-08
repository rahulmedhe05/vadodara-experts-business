import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "factories act 1948 in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional factories act 1948 services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/factories-act-1948-vadodara" },
  openGraph: {
    title: "factories act 1948 in Vadodara | VadodaraExperts",
    description: "Professional factories act 1948 services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/factories-act-1948-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factories-act-1948-vadodara" />;
}
