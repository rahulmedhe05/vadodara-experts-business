import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "water cannon fire in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional water cannon fire services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/water-cannon-fire-vadodara" },
  openGraph: {
    title: "water cannon fire in Vadodara | VadodaraExperts",
    description: "Professional water cannon fire services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/water-cannon-fire-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-cannon-fire-vadodara" />;
}
