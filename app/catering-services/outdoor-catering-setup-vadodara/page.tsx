import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Outdoor catering setup in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional outdoor catering setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/outdoor-catering-setup-vadodara" },
  openGraph: {
    title: "Outdoor catering setup in Vadodara | VadodaraExperts",
    description: "Professional outdoor catering setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/outdoor-catering-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outdoor-catering-setup-vadodara" />;
}
