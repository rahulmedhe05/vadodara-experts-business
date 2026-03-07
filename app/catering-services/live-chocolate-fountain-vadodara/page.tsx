import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Live chocolate fountain in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional live chocolate fountain services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/live-chocolate-fountain-vadodara" },
  openGraph: {
    title: "Live chocolate fountain in Vadodara | VadodaraExperts",
    description: "Professional live chocolate fountain services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/live-chocolate-fountain-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="live-chocolate-fountain-vadodara" />;
}
