import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "EV charging installation in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional ev charging installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/ev-charging-installation-vadodara" },
  openGraph: {
    title: "EV charging installation in Vadodara | VadodaraExperts",
    description: "Professional ev charging installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/ev-charging-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ev-charging-installation-vadodara" />;
}
