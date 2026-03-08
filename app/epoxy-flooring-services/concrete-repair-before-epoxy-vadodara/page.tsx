import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "concrete repair before epoxy in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional concrete repair before epoxy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/concrete-repair-before-epoxy-vadodara" },
  openGraph: {
    title: "concrete repair before epoxy in Vadodara | VadodaraExperts",
    description: "Professional concrete repair before epoxy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/concrete-repair-before-epoxy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concrete-repair-before-epoxy-vadodara" />;
}
