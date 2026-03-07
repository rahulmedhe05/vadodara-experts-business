import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "Industrial Land Brokers in Vadodara | VadodaraExperts",
  description: "Find the best industrial land brokers in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers" },
  openGraph: {
    title: "Industrial Land Brokers in Vadodara | VadodaraExperts",
    description: "Find the best industrial land brokers in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-land-brokers",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
