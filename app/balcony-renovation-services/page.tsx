import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("balcony-renovation-services")!;

export const metadata: Metadata = {
  title: "Balcony Renovation Services in Vadodara | VadodaraExperts",
  description: "Find the best balcony renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/balcony-renovation-services" },
  openGraph: {
    title: "Balcony Renovation Services in Vadodara | VadodaraExperts",
    description: "Find the best balcony renovation services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/balcony-renovation-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
