import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Curtain design consultation in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional curtain design consultation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/curtain-design-consultation-vadodara" },
  openGraph: {
    title: "Curtain design consultation in Vadodara | VadodaraExperts",
    description: "Professional curtain design consultation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/curtain-design-consultation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="curtain-design-consultation-vadodara" />;
}
