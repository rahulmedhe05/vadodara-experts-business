import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Diagnostic Labs in Vadodara | VadodaraExperts",
  description: "Find the best diagnostic labs in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs" },
  openGraph: {
    title: "Diagnostic Labs in Vadodara | VadodaraExperts",
    description: "Find the best diagnostic labs in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/diagnostic-labs",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
