import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "Industrial Pump Suppliers in Vadodara | VadodaraExperts",
  description: "Find the best industrial pump suppliers in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers" },
  openGraph: {
    title: "Industrial Pump Suppliers in Vadodara | VadodaraExperts",
    description: "Find the best industrial pump suppliers in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
