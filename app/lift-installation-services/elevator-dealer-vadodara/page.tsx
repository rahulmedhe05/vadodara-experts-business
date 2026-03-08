import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Elevator dealer in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional elevator dealer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/elevator-dealer-vadodara" },
  openGraph: {
    title: "Elevator dealer in Vadodara | VadodaraExperts",
    description: "Professional elevator dealer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/elevator-dealer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elevator-dealer-vadodara" />;
}
