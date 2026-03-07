import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Garden Landscaping Services in Vadodara | VadodaraExperts",
  description: "Find the best garden landscaping services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services" },
  openGraph: {
    title: "Garden Landscaping Services in Vadodara | VadodaraExperts",
    description: "Find the best garden landscaping services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/garden-landscaping-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
