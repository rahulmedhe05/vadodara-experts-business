import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "PLC Programming Services in Vadodara | VadodaraExperts",
  description: "Find the best plc programming services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services" },
  openGraph: {
    title: "PLC Programming Services in Vadodara | VadodaraExperts",
    description: "Find the best plc programming services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/plc-programming-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
