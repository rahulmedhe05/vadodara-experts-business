import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Roll on roll off in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional roll on roll off services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/roll-on-roll-off-vadodara" },
  openGraph: {
    title: "Roll on roll off in Vadodara | VadodaraExperts",
    description: "Professional roll on roll off services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/roll-on-roll-off-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roll-on-roll-off-vadodara" />;
}
