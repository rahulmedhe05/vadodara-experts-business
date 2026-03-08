import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "shed demolition and rebuild in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional shed demolition and rebuild services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/shed-demolition-and-rebuild-vadodara" },
  openGraph: {
    title: "shed demolition and rebuild in Vadodara | VadodaraExperts",
    description: "Professional shed demolition and rebuild services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/shed-demolition-and-rebuild-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shed-demolition-and-rebuild-vadodara" />;
}
