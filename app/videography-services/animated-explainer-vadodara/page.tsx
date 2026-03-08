import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Animated explainer in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional animated explainer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/animated-explainer-vadodara" },
  openGraph: {
    title: "Animated explainer in Vadodara | VadodaraExperts",
    description: "Professional animated explainer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/animated-explainer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="animated-explainer-vadodara" />;
}
