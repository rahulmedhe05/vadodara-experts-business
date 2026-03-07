import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "Epoxy Flooring Services in Vadodara | VadodaraExperts",
  description: "Find the best epoxy flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services" },
  openGraph: {
    title: "Epoxy Flooring Services in Vadodara | VadodaraExperts",
    description: "Find the best epoxy flooring services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
