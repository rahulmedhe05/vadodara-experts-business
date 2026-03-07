import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Ceiling moulding installation in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional ceiling moulding installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/ceiling-moulding-installation-vadodara" },
  openGraph: {
    title: "Ceiling moulding installation in Vadodara | VadodaraExperts",
    description: "Professional ceiling moulding installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/ceiling-moulding-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ceiling-moulding-installation-vadodara" />;
}
