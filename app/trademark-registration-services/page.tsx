import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Trademark Registration Services in Vadodara | VadodaraExperts",
  description: "Find the best trademark registration services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services" },
  openGraph: {
    title: "Trademark Registration Services in Vadodara | VadodaraExperts",
    description: "Find the best trademark registration services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/trademark-registration-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
