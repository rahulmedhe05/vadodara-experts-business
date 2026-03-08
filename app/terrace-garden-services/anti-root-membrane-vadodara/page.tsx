import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Anti root membrane in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional anti root membrane services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/anti-root-membrane-vadodara" },
  openGraph: {
    title: "Anti root membrane in Vadodara | VadodaraExperts",
    description: "Professional anti root membrane services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/anti-root-membrane-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-root-membrane-vadodara" />;
}
