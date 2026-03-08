import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "digital door lock in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional digital door lock services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/digital-door-lock-vadodara" },
  openGraph: {
    title: "digital door lock in Vadodara | VadodaraExperts",
    description: "Professional digital door lock services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/digital-door-lock-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="digital-door-lock-vadodara" />;
}
