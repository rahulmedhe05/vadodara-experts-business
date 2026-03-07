import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "color changing smart lights in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional color changing smart lights services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/color-changing-smart-lights-vadodara" },
  openGraph: {
    title: "color changing smart lights in Vadodara | VadodaraExperts",
    description: "Professional color changing smart lights services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/color-changing-smart-lights-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="color-changing-smart-lights-vadodara" />;
}
