import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Building Maintenance Services in Vadodara | VadodaraExperts",
  description: "Find the best building maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services" },
  openGraph: {
    title: "Building Maintenance Services in Vadodara | VadodaraExperts",
    description: "Find the best building maintenance services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/building-maintenance-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
