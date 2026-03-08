import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("boiler-services")!;

export const metadata: Metadata = {
  title: "Boiler Services in Vadodara | VadodaraExperts",
  description: "Find the best boiler services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/boiler-services" },
  openGraph: {
    title: "Boiler Services in Vadodara | VadodaraExperts",
    description: "Find the best boiler services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/boiler-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
