import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-system-installation")!;

export const metadata: Metadata = {
  title: "Parking System Installation in Vadodara | VadodaraExperts",
  description: "Find the best parking system installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-system-installation" },
  openGraph: {
    title: "Parking System Installation in Vadodara | VadodaraExperts",
    description: "Find the best parking system installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/parking-system-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
