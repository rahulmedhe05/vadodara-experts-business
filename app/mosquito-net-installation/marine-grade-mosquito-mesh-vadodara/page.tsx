import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Marine grade mosquito mesh in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional marine grade mosquito mesh services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/marine-grade-mosquito-mesh-vadodara" },
  openGraph: {
    title: "Marine grade mosquito mesh in Vadodara | VadodaraExperts",
    description: "Professional marine grade mosquito mesh services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/marine-grade-mosquito-mesh-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="marine-grade-mosquito-mesh-vadodara" />;
}
