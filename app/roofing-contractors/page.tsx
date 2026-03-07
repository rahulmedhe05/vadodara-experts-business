import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "Roofing Contractors in Vadodara | VadodaraExperts",
  description: "Find the best roofing contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors" },
  openGraph: {
    title: "Roofing Contractors in Vadodara | VadodaraExperts",
    description: "Find the best roofing contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/roofing-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
