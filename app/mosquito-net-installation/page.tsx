import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Mosquito Net Installation in Vadodara | VadodaraExperts",
  description: "Find the best mosquito net installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation" },
  openGraph: {
    title: "Mosquito Net Installation in Vadodara | VadodaraExperts",
    description: "Find the best mosquito net installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/mosquito-net-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
