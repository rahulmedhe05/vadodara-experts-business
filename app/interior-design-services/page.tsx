import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Interior Design Services in Vadodara | VadodaraExperts",
  description: "Find the best interior design services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services" },
  openGraph: {
    title: "Interior Design Services in Vadodara | VadodaraExperts",
    description: "Find the best interior design services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/interior-design-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
