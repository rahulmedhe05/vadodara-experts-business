import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Spa pool in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional spa pool services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/spa-pool-vadodara" },
  openGraph: {
    title: "Spa pool in Vadodara | VadodaraExperts",
    description: "Professional spa pool services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/spa-pool-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spa-pool-vadodara" />;
}
