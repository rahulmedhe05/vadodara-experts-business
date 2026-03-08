import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "industrial ventilation system in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional industrial ventilation system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/industrial-ventilation-system-vadodara" },
  openGraph: {
    title: "industrial ventilation system in Vadodara | VadodaraExperts",
    description: "Professional industrial ventilation system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/industrial-ventilation-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-ventilation-system-vadodara" />;
}
