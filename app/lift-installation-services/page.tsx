import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Lift Installation Services in Vadodara | VadodaraExperts",
  description: "Find the best lift installation services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services" },
  openGraph: {
    title: "Lift Installation Services in Vadodara | VadodaraExperts",
    description: "Find the best lift installation services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/lift-installation-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
