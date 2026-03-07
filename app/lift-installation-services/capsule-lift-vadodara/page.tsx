import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Capsule lift in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional capsule lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/capsule-lift-vadodara" },
  openGraph: {
    title: "Capsule lift in Vadodara | VadodaraExperts",
    description: "Professional capsule lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/capsule-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="capsule-lift-vadodara" />;
}
