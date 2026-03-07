import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Chimney duct installation in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional chimney duct installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-duct-installation-vadodara" },
  openGraph: {
    title: "Chimney duct installation in Vadodara | VadodaraExperts",
    description: "Professional chimney duct installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-duct-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chimney-duct-installation-vadodara" />;
}
