import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-roofing-systems")!;

export const metadata: Metadata = {
  title: "fiberglass roofing in Vadodara | Industrial Roofing Systems | VadodaraExperts",
  description: "Professional fiberglass roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-roofing-systems/fiberglass-roofing-vadodara" },
  openGraph: {
    title: "fiberglass roofing in Vadodara | VadodaraExperts",
    description: "Professional fiberglass roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-roofing-systems/fiberglass-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fiberglass-roofing-vadodara" />;
}
