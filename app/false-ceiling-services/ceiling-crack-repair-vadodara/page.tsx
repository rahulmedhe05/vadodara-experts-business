import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Ceiling crack repair in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional ceiling crack repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/ceiling-crack-repair-vadodara" },
  openGraph: {
    title: "Ceiling crack repair in Vadodara | VadodaraExperts",
    description: "Professional ceiling crack repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/ceiling-crack-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ceiling-crack-repair-vadodara" />;
}
