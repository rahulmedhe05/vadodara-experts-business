import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Slab leak repair in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional slab leak repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/slab-leak-repair-vadodara" },
  openGraph: {
    title: "Slab leak repair in Vadodara | VadodaraExperts",
    description: "Professional slab leak repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/slab-leak-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="slab-leak-repair-vadodara" />;
}
