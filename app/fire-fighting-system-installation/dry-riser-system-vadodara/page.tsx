import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "dry riser system in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional dry riser system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/dry-riser-system-vadodara" },
  openGraph: {
    title: "dry riser system in Vadodara | VadodaraExperts",
    description: "Professional dry riser system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/dry-riser-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dry-riser-system-vadodara" />;
}
