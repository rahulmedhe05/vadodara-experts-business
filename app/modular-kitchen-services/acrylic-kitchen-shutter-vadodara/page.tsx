import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Acrylic kitchen shutter in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional acrylic kitchen shutter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/acrylic-kitchen-shutter-vadodara" },
  openGraph: {
    title: "Acrylic kitchen shutter in Vadodara | VadodaraExperts",
    description: "Professional acrylic kitchen shutter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/acrylic-kitchen-shutter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="acrylic-kitchen-shutter-vadodara" />;
}
