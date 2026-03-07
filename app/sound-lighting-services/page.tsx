import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Sound & Lighting Services in Vadodara | VadodaraExperts",
  description: "Find the best sound & lighting services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services" },
  openGraph: {
    title: "Sound & Lighting Services in Vadodara | VadodaraExperts",
    description: "Find the best sound & lighting services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/sound-lighting-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
