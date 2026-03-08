import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("catering-services")!;

export const metadata: Metadata = {
  title: "Christmas catering in Vadodara | Catering Services | VadodaraExperts",
  description: "Professional christmas catering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/catering-services/christmas-catering-vadodara" },
  openGraph: {
    title: "Christmas catering in Vadodara | VadodaraExperts",
    description: "Professional christmas catering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/catering-services/christmas-catering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="christmas-catering-vadodara" />;
}
