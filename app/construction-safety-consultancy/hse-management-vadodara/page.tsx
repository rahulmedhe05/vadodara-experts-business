import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "HSE management in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional hse management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/hse-management-vadodara" },
  openGraph: {
    title: "HSE management in Vadodara | VadodaraExperts",
    description: "Professional hse management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/hse-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hse-management-vadodara" />;
}
