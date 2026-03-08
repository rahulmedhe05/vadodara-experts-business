import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-boiler-systems")!;

export const metadata: Metadata = {
  title: "boiler feed water pump in Vadodara | Industrial Boiler Systems | VadodaraExperts",
  description: "Professional boiler feed water pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-boiler-systems/boiler-feed-water-pump-vadodara" },
  openGraph: {
    title: "boiler feed water pump in Vadodara | VadodaraExperts",
    description: "Professional boiler feed water pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-boiler-systems/boiler-feed-water-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-feed-water-pump-vadodara" />;
}
