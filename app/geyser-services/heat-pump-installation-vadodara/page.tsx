import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Heat pump installation in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional heat pump installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/heat-pump-installation-vadodara" },
  openGraph: {
    title: "Heat pump installation in Vadodara | VadodaraExperts",
    description: "Professional heat pump installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/heat-pump-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heat-pump-installation-vadodara" />;
}
