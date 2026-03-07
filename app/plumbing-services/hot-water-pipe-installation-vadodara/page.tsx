import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Hot water pipe installation in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional hot water pipe installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/hot-water-pipe-installation-vadodara" },
  openGraph: {
    title: "Hot water pipe installation in Vadodara | VadodaraExperts",
    description: "Professional hot water pipe installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/hot-water-pipe-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hot-water-pipe-installation-vadodara" />;
}
