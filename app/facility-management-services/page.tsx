import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Facility Management Services in Vadodara | VadodaraExperts",
  description: "Find the best facility management services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services" },
  openGraph: {
    title: "Facility Management Services in Vadodara | VadodaraExperts",
    description: "Find the best facility management services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/facility-management-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
