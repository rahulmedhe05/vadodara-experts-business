import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "excavation safety audit in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional excavation safety audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/excavation-safety-audit-vadodara" },
  openGraph: {
    title: "excavation safety audit in Vadodara | VadodaraExperts",
    description: "Professional excavation safety audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/excavation-safety-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="excavation-safety-audit-vadodara" />;
}
