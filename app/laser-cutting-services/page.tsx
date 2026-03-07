import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("laser-cutting-services")!;

export const metadata: Metadata = {
  title: "Laser Cutting Services in Vadodara | VadodaraExperts",
  description: "Find the best laser cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/laser-cutting-services" },
  openGraph: {
    title: "Laser Cutting Services in Vadodara | VadodaraExperts",
    description: "Find the best laser cutting services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/laser-cutting-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
