import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("parking-management-systems")!;

export const metadata: Metadata = {
  title: "Parking Management Systems in Vadodara | VadodaraExperts",
  description: "Find the best parking management systems in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/parking-management-systems" },
  openGraph: {
    title: "Parking Management Systems in Vadodara | VadodaraExperts",
    description: "Find the best parking management systems in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/parking-management-systems",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
