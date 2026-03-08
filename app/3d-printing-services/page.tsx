import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("3d-printing-services")!;

export const metadata: Metadata = {
  title: "3D Printing Services in Vadodara | VadodaraExperts",
  description: "Find the best 3d printing services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/3d-printing-services" },
  openGraph: {
    title: "3D Printing Services in Vadodara | VadodaraExperts",
    description: "Find the best 3d printing services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/3d-printing-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
