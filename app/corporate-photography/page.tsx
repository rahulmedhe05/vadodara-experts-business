import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Corporate Photography in Vadodara | VadodaraExperts",
  description: "Find the best corporate photography in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography" },
  openGraph: {
    title: "Corporate Photography in Vadodara | VadodaraExperts",
    description: "Find the best corporate photography in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/corporate-photography",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
