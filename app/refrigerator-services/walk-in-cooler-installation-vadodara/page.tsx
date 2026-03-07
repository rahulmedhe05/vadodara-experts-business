import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("refrigerator-services")!;

export const metadata: Metadata = {
  title: "Walk in cooler installation in Vadodara | Refrigerator Services | VadodaraExperts",
  description: "Professional walk in cooler installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/refrigerator-services/walk-in-cooler-installation-vadodara" },
  openGraph: {
    title: "Walk in cooler installation in Vadodara | VadodaraExperts",
    description: "Professional walk in cooler installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/refrigerator-services/walk-in-cooler-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="walk-in-cooler-installation-vadodara" />;
}
