import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "C purlin PEB in Vadodara | PEB Building Construction | VadodaraExperts",
  description: "Professional c purlin peb services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction/c-purlin-peb-vadodara" },
  openGraph: {
    title: "C purlin PEB in Vadodara | VadodaraExperts",
    description: "Professional c purlin peb services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/peb-building-construction/c-purlin-peb-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="c-purlin-peb-vadodara" />;
}
