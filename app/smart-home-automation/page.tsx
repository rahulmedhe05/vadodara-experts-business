import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Smart Home Automation in Vadodara | VadodaraExperts",
  description: "Find the best smart home automation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation" },
  openGraph: {
    title: "Smart Home Automation in Vadodara | VadodaraExperts",
    description: "Find the best smart home automation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/smart-home-automation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
