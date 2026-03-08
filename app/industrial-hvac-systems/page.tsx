import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-hvac-systems")!;

export const metadata: Metadata = {
  title: "Industrial HVAC Systems in Vadodara | VadodaraExperts",
  description: "Find the best industrial hvac systems in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-hvac-systems" },
  openGraph: {
    title: "Industrial HVAC Systems in Vadodara | VadodaraExperts",
    description: "Find the best industrial hvac systems in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-hvac-systems",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
