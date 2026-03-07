import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Geyser pipe connection in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional geyser pipe connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/geyser-pipe-connection-vadodara" },
  openGraph: {
    title: "Geyser pipe connection in Vadodara | VadodaraExperts",
    description: "Professional geyser pipe connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/geyser-pipe-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="geyser-pipe-connection-vadodara" />;
}
