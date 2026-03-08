import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "plumbing layout design in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional plumbing layout design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/plumbing-layout-design-vadodara" },
  openGraph: {
    title: "plumbing layout design in Vadodara | VadodaraExperts",
    description: "Professional plumbing layout design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/plumbing-layout-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plumbing-layout-design-vadodara" />;
}
