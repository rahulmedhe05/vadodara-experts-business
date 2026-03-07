import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Kitchen platform woodwork in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional kitchen platform woodwork services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/kitchen-platform-woodwork-vadodara" },
  openGraph: {
    title: "Kitchen platform woodwork in Vadodara | VadodaraExperts",
    description: "Professional kitchen platform woodwork services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/kitchen-platform-woodwork-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-platform-woodwork-vadodara" />;
}
