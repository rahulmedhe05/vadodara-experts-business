import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "machine guarding audit in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional machine guarding audit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/machine-guarding-audit-vadodara" },
  openGraph: {
    title: "machine guarding audit in Vadodara | VadodaraExperts",
    description: "Professional machine guarding audit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/machine-guarding-audit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="machine-guarding-audit-vadodara" />;
}
