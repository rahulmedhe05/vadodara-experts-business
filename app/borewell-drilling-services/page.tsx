import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Borewell Drilling Services in Vadodara | VadodaraExperts",
  description: "Find the best borewell drilling services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services" },
  openGraph: {
    title: "Borewell Drilling Services in Vadodara | VadodaraExperts",
    description: "Find the best borewell drilling services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/borewell-drilling-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
