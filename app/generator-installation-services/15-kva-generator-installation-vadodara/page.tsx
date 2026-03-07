import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "15 kVA generator installation in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional 15 kva generator installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/15-kva-generator-installation-vadodara" },
  openGraph: {
    title: "15 kVA generator installation in Vadodara | VadodaraExperts",
    description: "Professional 15 kva generator installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/15-kva-generator-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="15-kva-generator-installation-vadodara" />;
}
