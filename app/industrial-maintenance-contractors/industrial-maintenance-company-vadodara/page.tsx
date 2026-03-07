import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "industrial maintenance company in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional industrial maintenance company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/industrial-maintenance-company-vadodara" },
  openGraph: {
    title: "industrial maintenance company in Vadodara | VadodaraExperts",
    description: "Professional industrial maintenance company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/industrial-maintenance-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-maintenance-company-vadodara" />;
}
