import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "shed estimation in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional shed estimation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/shed-estimation-vadodara" },
  openGraph: {
    title: "shed estimation in Vadodara | VadodaraExperts",
    description: "Professional shed estimation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/shed-estimation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shed-estimation-vadodara" />;
}
