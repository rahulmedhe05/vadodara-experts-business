import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "testing lab interior in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional testing lab interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/testing-lab-interior-vadodara" },
  openGraph: {
    title: "testing lab interior in Vadodara | VadodaraExperts",
    description: "Professional testing lab interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/testing-lab-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="testing-lab-interior-vadodara" />;
}
