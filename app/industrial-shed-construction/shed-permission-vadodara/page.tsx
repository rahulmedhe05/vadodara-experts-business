import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "shed permission in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional shed permission services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/shed-permission-vadodara" },
  openGraph: {
    title: "shed permission in Vadodara | VadodaraExperts",
    description: "Professional shed permission services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/shed-permission-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shed-permission-vadodara" />;
}
