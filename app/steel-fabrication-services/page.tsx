import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "Steel Fabrication Services in Vadodara | VadodaraExperts",
  description: "Find the best steel fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services" },
  openGraph: {
    title: "Steel Fabrication Services in Vadodara | VadodaraExperts",
    description: "Find the best steel fabrication services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/steel-fabrication-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
