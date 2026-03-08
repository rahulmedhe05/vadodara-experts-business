import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sofa-cleaning-services")!;

export const metadata: Metadata = {
  title: "Sofa Cleaning Services in Vadodara | VadodaraExperts",
  description: "Find the best sofa cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/sofa-cleaning-services" },
  openGraph: {
    title: "Sofa Cleaning Services in Vadodara | VadodaraExperts",
    description: "Find the best sofa cleaning services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/sofa-cleaning-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
