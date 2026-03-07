import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "industrial cafeteria interior in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional industrial cafeteria interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/industrial-cafeteria-interior-vadodara" },
  openGraph: {
    title: "industrial cafeteria interior in Vadodara | VadodaraExperts",
    description: "Professional industrial cafeteria interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/industrial-cafeteria-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-cafeteria-interior-vadodara" />;
}
