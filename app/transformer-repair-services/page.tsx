import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("transformer-repair-services")!;

export const metadata: Metadata = {
  title: "Transformer Repair Services in Vadodara | VadodaraExperts",
  description: "Find the best transformer repair services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/transformer-repair-services" },
  openGraph: {
    title: "Transformer Repair Services in Vadodara | VadodaraExperts",
    description: "Find the best transformer repair services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/transformer-repair-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
