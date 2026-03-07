import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Lift door repair in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional lift door repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/lift-door-repair-vadodara" },
  openGraph: {
    title: "Lift door repair in Vadodara | VadodaraExperts",
    description: "Professional lift door repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/lift-door-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-door-repair-vadodara" />;
}
