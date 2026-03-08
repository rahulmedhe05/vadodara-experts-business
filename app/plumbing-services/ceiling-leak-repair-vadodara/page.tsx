import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Ceiling leak repair in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional ceiling leak repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/ceiling-leak-repair-vadodara" },
  openGraph: {
    title: "Ceiling leak repair in Vadodara | VadodaraExperts",
    description: "Professional ceiling leak repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/ceiling-leak-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ceiling-leak-repair-vadodara" />;
}
