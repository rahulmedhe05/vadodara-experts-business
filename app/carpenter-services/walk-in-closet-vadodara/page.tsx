import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Walk in closet in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional walk in closet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/walk-in-closet-vadodara" },
  openGraph: {
    title: "Walk in closet in Vadodara | VadodaraExperts",
    description: "Professional walk in closet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/walk-in-closet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="walk-in-closet-vadodara" />;
}
