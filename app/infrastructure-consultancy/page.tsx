import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "Infrastructure Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best infrastructure consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy" },
  openGraph: {
    title: "Infrastructure Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best infrastructure consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
