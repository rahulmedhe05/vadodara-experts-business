import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Geyser preventive maintenance in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional geyser preventive maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/geyser-preventive-maintenance-vadodara" },
  openGraph: {
    title: "Geyser preventive maintenance in Vadodara | VadodaraExperts",
    description: "Professional geyser preventive maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/geyser-preventive-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="geyser-preventive-maintenance-vadodara" />;
}
