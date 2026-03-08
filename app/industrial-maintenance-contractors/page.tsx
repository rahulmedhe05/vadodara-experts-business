import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "Industrial Maintenance Contractors in Vadodara | VadodaraExperts",
  description: "Find the best industrial maintenance contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors" },
  openGraph: {
    title: "Industrial Maintenance Contractors in Vadodara | VadodaraExperts",
    description: "Find the best industrial maintenance contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
