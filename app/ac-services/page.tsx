import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "AC Services in Vadodara | VadodaraExperts",
  description: "Find the best ac services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services" },
  openGraph: {
    title: "AC Services in Vadodara | VadodaraExperts",
    description: "Find the best ac services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/ac-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
