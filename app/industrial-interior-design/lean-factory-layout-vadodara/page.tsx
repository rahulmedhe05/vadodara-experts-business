import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "lean factory layout in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional lean factory layout services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/lean-factory-layout-vadodara" },
  openGraph: {
    title: "lean factory layout in Vadodara | VadodaraExperts",
    description: "Professional lean factory layout services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/lean-factory-layout-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lean-factory-layout-vadodara" />;
}
