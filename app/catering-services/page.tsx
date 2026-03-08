import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Catering Services in Vadodara | VadodaraExperts",
  description: "Find the best catering services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services" },
  openGraph: {
    title: "Catering Services in Vadodara | VadodaraExperts",
    description: "Find the best catering services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/catering-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
