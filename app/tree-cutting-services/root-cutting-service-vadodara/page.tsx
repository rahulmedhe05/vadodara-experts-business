import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tree-cutting-services")!;

export const metadata: Metadata = {
  title: "Root cutting service in Vadodara | Tree Cutting Services | VadodaraExperts",
  description: "Professional root cutting service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tree-cutting-services/root-cutting-service-vadodara" },
  openGraph: {
    title: "Root cutting service in Vadodara | VadodaraExperts",
    description: "Professional root cutting service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tree-cutting-services/root-cutting-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="root-cutting-service-vadodara" />;
}
