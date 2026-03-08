import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "material handling system in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional material handling system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/material-handling-system-vadodara" },
  openGraph: {
    title: "material handling system in Vadodara | VadodaraExperts",
    description: "Professional material handling system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/material-handling-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="material-handling-system-vadodara" />;
}
