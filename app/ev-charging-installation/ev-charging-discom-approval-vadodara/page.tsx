import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "EV charging DISCOM approval in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional ev charging discom approval services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/ev-charging-discom-approval-vadodara" },
  openGraph: {
    title: "EV charging DISCOM approval in Vadodara | VadodaraExperts",
    description: "Professional ev charging discom approval services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/ev-charging-discom-approval-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ev-charging-discom-approval-vadodara" />;
}
