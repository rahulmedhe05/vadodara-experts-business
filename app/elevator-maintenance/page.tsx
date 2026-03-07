import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "Elevator Maintenance in Vadodara | VadodaraExperts",
  description: "Find the best elevator maintenance in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance" },
  openGraph: {
    title: "Elevator Maintenance in Vadodara | VadodaraExperts",
    description: "Find the best elevator maintenance in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/elevator-maintenance",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
