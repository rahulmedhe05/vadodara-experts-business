import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "Building Inspection Services in Vadodara | VadodaraExperts",
  description: "Find the best building inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services" },
  openGraph: {
    title: "Building Inspection Services in Vadodara | VadodaraExperts",
    description: "Find the best building inspection services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/building-inspection-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
