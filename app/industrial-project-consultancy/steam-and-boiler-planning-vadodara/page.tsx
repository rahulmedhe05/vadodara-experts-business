import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "steam and boiler planning in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional steam and boiler planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/steam-and-boiler-planning-vadodara" },
  openGraph: {
    title: "steam and boiler planning in Vadodara | VadodaraExperts",
    description: "Professional steam and boiler planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/steam-and-boiler-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steam-and-boiler-planning-vadodara" />;
}
