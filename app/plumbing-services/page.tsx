import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Plumbing Services in Vadodara | VadodaraExperts",
  description: "Find the best plumbing services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services" },
  openGraph: {
    title: "Plumbing Services in Vadodara | VadodaraExperts",
    description: "Find the best plumbing services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/plumbing-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
