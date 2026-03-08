import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "Property Investment Advisory in Vadodara | VadodaraExperts",
  description: "Find the best property investment advisory in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory" },
  openGraph: {
    title: "Property Investment Advisory in Vadodara | VadodaraExperts",
    description: "Find the best property investment advisory in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/property-investment-advisory",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
