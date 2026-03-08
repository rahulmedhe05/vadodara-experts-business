import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "flash steam recovery in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional flash steam recovery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/flash-steam-recovery-vadodara" },
  openGraph: {
    title: "flash steam recovery in Vadodara | VadodaraExperts",
    description: "Professional flash steam recovery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/flash-steam-recovery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flash-steam-recovery-vadodara" />;
}
