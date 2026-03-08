import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "Profibus network in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional profibus network services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/profibus-network-vadodara" },
  openGraph: {
    title: "Profibus network in Vadodara | VadodaraExperts",
    description: "Professional profibus network services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/profibus-network-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="profibus-network-vadodara" />;
}
