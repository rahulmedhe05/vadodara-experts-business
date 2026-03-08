import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "expansion joint treatment in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional expansion joint treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/expansion-joint-treatment-vadodara" },
  openGraph: {
    title: "expansion joint treatment in Vadodara | VadodaraExperts",
    description: "Professional expansion joint treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/expansion-joint-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="expansion-joint-treatment-vadodara" />;
}
