import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Terrace Garden Services in Vadodara | VadodaraExperts",
  description: "Find the best terrace garden services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services" },
  openGraph: {
    title: "Terrace Garden Services in Vadodara | VadodaraExperts",
    description: "Find the best terrace garden services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/terrace-garden-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
