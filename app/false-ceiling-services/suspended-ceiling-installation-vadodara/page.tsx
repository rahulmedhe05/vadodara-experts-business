import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Suspended ceiling installation in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional suspended ceiling installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/suspended-ceiling-installation-vadodara" },
  openGraph: {
    title: "Suspended ceiling installation in Vadodara | VadodaraExperts",
    description: "Professional suspended ceiling installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/suspended-ceiling-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="suspended-ceiling-installation-vadodara" />;
}
