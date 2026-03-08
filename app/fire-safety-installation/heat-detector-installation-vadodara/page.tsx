import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "heat detector installation in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional heat detector installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/heat-detector-installation-vadodara" },
  openGraph: {
    title: "heat detector installation in Vadodara | VadodaraExperts",
    description: "Professional heat detector installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/heat-detector-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heat-detector-installation-vadodara" />;
}
