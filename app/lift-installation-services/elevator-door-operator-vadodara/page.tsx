import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Elevator door operator in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional elevator door operator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/elevator-door-operator-vadodara" },
  openGraph: {
    title: "Elevator door operator in Vadodara | VadodaraExperts",
    description: "Professional elevator door operator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/elevator-door-operator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-door-operator-vadodara" />;
}
