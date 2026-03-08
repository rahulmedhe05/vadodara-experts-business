import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("geyser-services")!;

export const metadata: Metadata = {
  title: "Industrial water heating system in Vadodara | Geyser Services | VadodaraExperts",
  description: "Professional industrial water heating system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/geyser-services/industrial-water-heating-system-vadodara" },
  openGraph: {
    title: "Industrial water heating system in Vadodara | VadodaraExperts",
    description: "Professional industrial water heating system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/geyser-services/industrial-water-heating-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-water-heating-system-vadodara" />;
}
