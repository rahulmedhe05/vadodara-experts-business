import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Kone elevator in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional kone elevator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/kone-elevator-vadodara" },
  openGraph: {
    title: "Kone elevator in Vadodara | VadodaraExperts",
    description: "Professional kone elevator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/kone-elevator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kone-elevator-vadodara" />;
}
