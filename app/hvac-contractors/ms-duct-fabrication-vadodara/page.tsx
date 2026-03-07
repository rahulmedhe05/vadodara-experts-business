import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "MS duct fabrication in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional ms duct fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/ms-duct-fabrication-vadodara" },
  openGraph: {
    title: "MS duct fabrication in Vadodara | VadodaraExperts",
    description: "Professional ms duct fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/ms-duct-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ms-duct-fabrication-vadodara" />;
}
