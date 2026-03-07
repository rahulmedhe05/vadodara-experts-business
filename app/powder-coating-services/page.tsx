import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("powder-coating-services")!;

export const metadata: Metadata = {
  title: "Powder Coating Services in Vadodara | VadodaraExperts",
  description: "Find the best powder coating services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/powder-coating-services" },
  openGraph: {
    title: "Powder Coating Services in Vadodara | VadodaraExperts",
    description: "Find the best powder coating services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/powder-coating-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
