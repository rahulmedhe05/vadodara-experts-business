import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "shed with crane beam in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional shed with crane beam services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/shed-with-crane-beam-vadodara" },
  openGraph: {
    title: "shed with crane beam in Vadodara | VadodaraExperts",
    description: "Professional shed with crane beam services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/shed-with-crane-beam-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shed-with-crane-beam-vadodara" />;
}
