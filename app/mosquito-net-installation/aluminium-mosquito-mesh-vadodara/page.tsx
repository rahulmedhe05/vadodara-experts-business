import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Aluminium mosquito mesh in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional aluminium mosquito mesh services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/aluminium-mosquito-mesh-vadodara" },
  openGraph: {
    title: "Aluminium mosquito mesh in Vadodara | VadodaraExperts",
    description: "Professional aluminium mosquito mesh services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/aluminium-mosquito-mesh-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-mosquito-mesh-vadodara" />;
}
