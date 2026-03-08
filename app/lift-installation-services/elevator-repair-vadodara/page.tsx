import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Elevator repair in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional elevator repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/elevator-repair-vadodara" },
  openGraph: {
    title: "Elevator repair in Vadodara | VadodaraExperts",
    description: "Professional elevator repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/elevator-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-repair-vadodara" />;
}
