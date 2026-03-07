import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Bar bending schedule in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional bar bending schedule services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/bar-bending-schedule-vadodara" },
  openGraph: {
    title: "Bar bending schedule in Vadodara | VadodaraExperts",
    description: "Professional bar bending schedule services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/bar-bending-schedule-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bar-bending-schedule-vadodara" />;
}
