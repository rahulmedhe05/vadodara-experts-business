import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "Real Estate Legal Advisory in Vadodara | VadodaraExperts",
  description: "Find the best real estate legal advisory in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory" },
  openGraph: {
    title: "Real Estate Legal Advisory in Vadodara | VadodaraExperts",
    description: "Find the best real estate legal advisory in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
