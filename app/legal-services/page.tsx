import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Legal Services in Vadodara | VadodaraExperts",
  description: "Find the best legal services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services" },
  openGraph: {
    title: "Legal Services in Vadodara | VadodaraExperts",
    description: "Find the best legal services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/legal-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
