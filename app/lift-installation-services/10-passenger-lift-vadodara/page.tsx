import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "10 passenger lift in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional 10 passenger lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/10-passenger-lift-vadodara" },
  openGraph: {
    title: "10 passenger lift in Vadodara | VadodaraExperts",
    description: "Professional 10 passenger lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/10-passenger-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="10-passenger-lift-vadodara" />;
}
