import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "Industrial Welding Services in Vadodara | VadodaraExperts",
  description: "Find the best industrial welding services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services" },
  openGraph: {
    title: "Industrial Welding Services in Vadodara | VadodaraExperts",
    description: "Find the best industrial welding services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-welding-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
