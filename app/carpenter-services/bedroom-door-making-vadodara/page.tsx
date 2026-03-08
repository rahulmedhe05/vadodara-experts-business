import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Bedroom door making in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional bedroom door making services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/bedroom-door-making-vadodara" },
  openGraph: {
    title: "Bedroom door making in Vadodara | VadodaraExperts",
    description: "Professional bedroom door making services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/bedroom-door-making-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bedroom-door-making-vadodara" />;
}
