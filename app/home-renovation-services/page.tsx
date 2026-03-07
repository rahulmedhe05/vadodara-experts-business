import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Home Renovation Services in Vadodara | VadodaraExperts",
  description: "Find the best home renovation services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services" },
  openGraph: {
    title: "Home Renovation Services in Vadodara | VadodaraExperts",
    description: "Find the best home renovation services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/home-renovation-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
