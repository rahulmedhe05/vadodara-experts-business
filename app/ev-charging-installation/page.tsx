import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "EV Charging Installation in Vadodara | VadodaraExperts",
  description: "Find the best ev charging installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation" },
  openGraph: {
    title: "EV Charging Installation in Vadodara | VadodaraExperts",
    description: "Find the best ev charging installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/ev-charging-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
