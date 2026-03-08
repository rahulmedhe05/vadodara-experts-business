import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "Interior Fit-Out Contractors in Vadodara | VadodaraExperts",
  description: "Find the best interior fit-out contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors" },
  openGraph: {
    title: "Interior Fit-Out Contractors in Vadodara | VadodaraExperts",
    description: "Find the best interior fit-out contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
