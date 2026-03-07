import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Car lift in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional car lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/car-lift-vadodara" },
  openGraph: {
    title: "Car lift in Vadodara | VadodaraExperts",
    description: "Professional car lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/car-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="car-lift-vadodara" />;
}
