import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-pest-control")!;

export const metadata: Metadata = {
  title: "Commercial Pest Control in Vadodara | VadodaraExperts",
  description: "Find the best commercial pest control in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-pest-control" },
  openGraph: {
    title: "Commercial Pest Control in Vadodara | VadodaraExperts",
    description: "Find the best commercial pest control in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/commercial-pest-control",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
