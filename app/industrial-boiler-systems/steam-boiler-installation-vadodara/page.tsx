import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "steam boiler installation in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional steam boiler installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/steam-boiler-installation-vadodara" },
  openGraph: {
    title: "steam boiler installation in Vadodara | VadodaraExperts",
    description: "Professional steam boiler installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/steam-boiler-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steam-boiler-installation-vadodara" />;
}
