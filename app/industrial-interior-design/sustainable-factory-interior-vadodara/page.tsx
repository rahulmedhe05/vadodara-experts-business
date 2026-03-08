import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "sustainable factory interior in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional sustainable factory interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/sustainable-factory-interior-vadodara" },
  openGraph: {
    title: "sustainable factory interior in Vadodara | VadodaraExperts",
    description: "Professional sustainable factory interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/sustainable-factory-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sustainable-factory-interior-vadodara" />;
}
