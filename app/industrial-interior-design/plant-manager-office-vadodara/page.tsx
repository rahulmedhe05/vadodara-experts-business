import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "plant manager office in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional plant manager office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/plant-manager-office-vadodara" },
  openGraph: {
    title: "plant manager office in Vadodara | VadodaraExperts",
    description: "Professional plant manager office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/plant-manager-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plant-manager-office-vadodara" />;
}
