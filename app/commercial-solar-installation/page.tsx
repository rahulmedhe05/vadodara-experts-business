import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "Commercial Solar Installation in Vadodara | VadodaraExperts",
  description: "Find the best commercial solar installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation" },
  openGraph: {
    title: "Commercial Solar Installation in Vadodara | VadodaraExperts",
    description: "Find the best commercial solar installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/commercial-solar-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
