import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Bathroom geyser installation in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional bathroom geyser installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/bathroom-geyser-installation-vadodara" },
  openGraph: {
    title: "Bathroom geyser installation in Vadodara | VadodaraExperts",
    description: "Professional bathroom geyser installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/bathroom-geyser-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bathroom-geyser-installation-vadodara" />;
}
