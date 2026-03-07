import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "steam distribution in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional steam distribution services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/steam-distribution-vadodara" },
  openGraph: {
    title: "steam distribution in Vadodara | VadodaraExperts",
    description: "Professional steam distribution services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/steam-distribution-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steam-distribution-vadodara" />;
}
