import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("marble-granite-services")!;

export const metadata: Metadata = {
  title: "Kitchen platform stone in Vadodara | Marble & Granite Services | VadodaraExperts",
  description: "Professional kitchen platform stone services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/marble-granite-services/kitchen-platform-stone-vadodara" },
  openGraph: {
    title: "Kitchen platform stone in Vadodara | VadodaraExperts",
    description: "Professional kitchen platform stone services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/marble-granite-services/kitchen-platform-stone-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-platform-stone-vadodara" />;
}
