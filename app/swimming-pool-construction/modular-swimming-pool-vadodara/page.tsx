import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Modular swimming pool in Vadodara | Swimming Pool Construction | VadodaraExperts",
  description: "Professional modular swimming pool services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction/modular-swimming-pool-vadodara" },
  openGraph: {
    title: "Modular swimming pool in Vadodara | VadodaraExperts",
    description: "Professional modular swimming pool services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/swimming-pool-construction/modular-swimming-pool-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-swimming-pool-vadodara" />;
}
