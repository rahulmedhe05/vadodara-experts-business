import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "ECE elevator in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional ece elevator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/ece-elevator-vadodara" },
  openGraph: {
    title: "ECE elevator in Vadodara | VadodaraExperts",
    description: "Professional ece elevator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/ece-elevator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ece-elevator-vadodara" />;
}
