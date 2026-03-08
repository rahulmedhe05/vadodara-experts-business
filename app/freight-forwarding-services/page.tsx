import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Freight Forwarding Services in Vadodara | VadodaraExperts",
  description: "Find the best freight forwarding services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services" },
  openGraph: {
    title: "Freight Forwarding Services in Vadodara | VadodaraExperts",
    description: "Find the best freight forwarding services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/freight-forwarding-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
