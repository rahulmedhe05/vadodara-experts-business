import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Aluminium profile shutter in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional aluminium profile shutter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/aluminium-profile-shutter-vadodara" },
  openGraph: {
    title: "Aluminium profile shutter in Vadodara | VadodaraExperts",
    description: "Professional aluminium profile shutter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/aluminium-profile-shutter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-profile-shutter-vadodara" />;
}
