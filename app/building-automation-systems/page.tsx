import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "Building Automation Systems in Vadodara | VadodaraExperts",
  description: "Find the best building automation systems in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems" },
  openGraph: {
    title: "Building Automation Systems in Vadodara | VadodaraExperts",
    description: "Find the best building automation systems in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/building-automation-systems",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
