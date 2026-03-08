import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory 3D design in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory 3d design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-3d-design-vadodara" },
  openGraph: {
    title: "factory 3D design in Vadodara | VadodaraExperts",
    description: "Professional factory 3d design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-3d-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-3d-design-vadodara" />;
}
