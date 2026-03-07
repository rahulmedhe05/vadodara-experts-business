import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("laser-cutting-services")!;

export const metadata: Metadata = {
  title: "mild steel laser cutting in Vadodara | Laser Cutting Services | VadodaraExperts",
  description: "Professional mild steel laser cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/laser-cutting-services/mild-steel-laser-cutting-vadodara" },
  openGraph: {
    title: "mild steel laser cutting in Vadodara | VadodaraExperts",
    description: "Professional mild steel laser cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/laser-cutting-services/mild-steel-laser-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mild-steel-laser-cutting-vadodara" />;
}
