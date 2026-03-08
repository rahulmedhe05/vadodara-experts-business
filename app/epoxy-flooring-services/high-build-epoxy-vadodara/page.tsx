import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "high build epoxy in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional high build epoxy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/high-build-epoxy-vadodara" },
  openGraph: {
    title: "high build epoxy in Vadodara | VadodaraExperts",
    description: "Professional high build epoxy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/high-build-epoxy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-build-epoxy-vadodara" />;
}
