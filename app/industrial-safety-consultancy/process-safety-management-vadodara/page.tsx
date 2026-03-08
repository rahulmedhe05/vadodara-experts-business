import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "process safety management in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional process safety management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/process-safety-management-vadodara" },
  openGraph: {
    title: "process safety management in Vadodara | VadodaraExperts",
    description: "Professional process safety management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/process-safety-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="process-safety-management-vadodara" />;
}
