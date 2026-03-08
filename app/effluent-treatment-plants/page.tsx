import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "Effluent Treatment Plants in Vadodara | VadodaraExperts",
  description: "Find the best effluent treatment plants in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants" },
  openGraph: {
    title: "Effluent Treatment Plants in Vadodara | VadodaraExperts",
    description: "Find the best effluent treatment plants in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
