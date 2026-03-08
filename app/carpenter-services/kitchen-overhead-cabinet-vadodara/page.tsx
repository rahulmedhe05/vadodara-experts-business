import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Kitchen overhead cabinet in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional kitchen overhead cabinet services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/kitchen-overhead-cabinet-vadodara" },
  openGraph: {
    title: "Kitchen overhead cabinet in Vadodara | VadodaraExperts",
    description: "Professional kitchen overhead cabinet services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/kitchen-overhead-cabinet-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-overhead-cabinet-vadodara" />;
}
