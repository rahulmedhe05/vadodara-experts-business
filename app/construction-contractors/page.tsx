import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Construction Contractors in Vadodara | VadodaraExperts",
  description: "Find the best construction contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors" },
  openGraph: {
    title: "Construction Contractors in Vadodara | VadodaraExperts",
    description: "Find the best construction contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/construction-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
