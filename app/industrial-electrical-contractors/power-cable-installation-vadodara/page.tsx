import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "power cable installation in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional power cable installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/power-cable-installation-vadodara" },
  openGraph: {
    title: "power cable installation in Vadodara | VadodaraExperts",
    description: "Professional power cable installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/power-cable-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-cable-installation-vadodara" />;
}
