import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Geared traction lift in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional geared traction lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/geared-traction-lift-vadodara" },
  openGraph: {
    title: "Geared traction lift in Vadodara | VadodaraExperts",
    description: "Professional geared traction lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/geared-traction-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="geared-traction-lift-vadodara" />;
}
