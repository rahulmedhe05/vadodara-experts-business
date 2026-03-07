import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Branch lopping in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional branch lopping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/branch-lopping-vadodara" },
  openGraph: {
    title: "Branch lopping in Vadodara | VadodaraExperts",
    description: "Professional branch lopping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/branch-lopping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="branch-lopping-vadodara" />;
}
