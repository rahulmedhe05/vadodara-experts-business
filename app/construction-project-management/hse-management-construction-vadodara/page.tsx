import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "HSE management construction in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional hse management construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/hse-management-construction-vadodara" },
  openGraph: {
    title: "HSE management construction in Vadodara | VadodaraExperts",
    description: "Professional hse management construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/hse-management-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hse-management-construction-vadodara" />;
}
