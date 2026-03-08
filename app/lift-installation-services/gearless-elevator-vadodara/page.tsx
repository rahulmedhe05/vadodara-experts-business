import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Gearless elevator in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional gearless elevator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/gearless-elevator-vadodara" },
  openGraph: {
    title: "Gearless elevator in Vadodara | VadodaraExperts",
    description: "Professional gearless elevator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/gearless-elevator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gearless-elevator-vadodara" />;
}
