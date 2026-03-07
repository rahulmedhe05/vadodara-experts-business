import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Escalator Installation in Vadodara | VadodaraExperts",
  description: "Find the best escalator installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation" },
  openGraph: {
    title: "Escalator Installation in Vadodara | VadodaraExperts",
    description: "Find the best escalator installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/escalator-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
