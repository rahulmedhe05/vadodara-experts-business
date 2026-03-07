import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "Plumbing Contractors in Vadodara | VadodaraExperts",
  description: "Find the best plumbing contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors" },
  openGraph: {
    title: "Plumbing Contractors in Vadodara | VadodaraExperts",
    description: "Find the best plumbing contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/plumbing-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
