import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Anti slip pool tile in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional anti slip pool tile services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/anti-slip-pool-tile-vadodara" },
  openGraph: {
    title: "Anti slip pool tile in Vadodara | VadodaraExperts",
    description: "Professional anti slip pool tile services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/anti-slip-pool-tile-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-slip-pool-tile-vadodara" />;
}
