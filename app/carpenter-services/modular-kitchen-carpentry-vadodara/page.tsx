import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Modular kitchen carpentry in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional modular kitchen carpentry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/modular-kitchen-carpentry-vadodara" },
  openGraph: {
    title: "Modular kitchen carpentry in Vadodara | VadodaraExperts",
    description: "Professional modular kitchen carpentry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/modular-kitchen-carpentry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-kitchen-carpentry-vadodara" />;
}
