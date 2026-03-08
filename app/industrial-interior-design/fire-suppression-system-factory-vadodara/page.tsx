import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "fire suppression system factory in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional fire suppression system factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/fire-suppression-system-factory-vadodara" },
  openGraph: {
    title: "fire suppression system factory in Vadodara | VadodaraExperts",
    description: "Professional fire suppression system factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/fire-suppression-system-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-suppression-system-factory-vadodara" />;
}
