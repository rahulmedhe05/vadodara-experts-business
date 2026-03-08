import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Elevator supplier in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional elevator supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/elevator-supplier-vadodara" },
  openGraph: {
    title: "Elevator supplier in Vadodara | VadodaraExperts",
    description: "Professional elevator supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/elevator-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-supplier-vadodara" />;
}
