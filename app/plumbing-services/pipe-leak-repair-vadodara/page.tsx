import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Pipe leak repair in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional pipe leak repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/pipe-leak-repair-vadodara" },
  openGraph: {
    title: "Pipe leak repair in Vadodara | VadodaraExperts",
    description: "Professional pipe leak repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/pipe-leak-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pipe-leak-repair-vadodara" />;
}
