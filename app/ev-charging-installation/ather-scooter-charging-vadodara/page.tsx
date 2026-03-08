import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ev-charging-installation")!;

export const metadata: Metadata = {
  title: "Ather scooter charging in Vadodara | EV Charging Installation | VadodaraExperts",
  description: "Professional ather scooter charging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ev-charging-installation/ather-scooter-charging-vadodara" },
  openGraph: {
    title: "Ather scooter charging in Vadodara | VadodaraExperts",
    description: "Professional ather scooter charging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ev-charging-installation/ather-scooter-charging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ather-scooter-charging-vadodara" />;
}
