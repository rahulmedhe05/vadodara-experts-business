import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Generator Installation Services in Vadodara | VadodaraExperts",
  description: "Find the best generator installation services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services" },
  openGraph: {
    title: "Generator Installation Services in Vadodara | VadodaraExperts",
    description: "Find the best generator installation services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/generator-installation-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
