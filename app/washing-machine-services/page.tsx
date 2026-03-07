import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Washing Machine Services in Vadodara | VadodaraExperts",
  description: "Find the best washing machine services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services" },
  openGraph: {
    title: "Washing Machine Services in Vadodara | VadodaraExperts",
    description: "Find the best washing machine services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/washing-machine-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
