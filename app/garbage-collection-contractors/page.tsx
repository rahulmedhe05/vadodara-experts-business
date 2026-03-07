import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garbage-collection-contractors")!;

export const metadata: Metadata = {
  title: "Garbage Collection Contractors in Vadodara | VadodaraExperts",
  description: "Find the best garbage collection contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/garbage-collection-contractors" },
  openGraph: {
    title: "Garbage Collection Contractors in Vadodara | VadodaraExperts",
    description: "Find the best garbage collection contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/garbage-collection-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
