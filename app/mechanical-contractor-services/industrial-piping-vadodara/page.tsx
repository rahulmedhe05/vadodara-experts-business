import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "industrial piping in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional industrial piping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/industrial-piping-vadodara" },
  openGraph: {
    title: "industrial piping in Vadodara | VadodaraExperts",
    description: "Professional industrial piping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/industrial-piping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-piping-vadodara" />;
}
