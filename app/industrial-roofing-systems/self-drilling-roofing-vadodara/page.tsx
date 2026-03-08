import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "self drilling roofing in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional self drilling roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/self-drilling-roofing-vadodara" },
  openGraph: {
    title: "self drilling roofing in Vadodara | VadodaraExperts",
    description: "Professional self drilling roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/self-drilling-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="self-drilling-roofing-vadodara" />;
}
