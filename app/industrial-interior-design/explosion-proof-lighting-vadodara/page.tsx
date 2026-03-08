import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "explosion proof lighting in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional explosion proof lighting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/explosion-proof-lighting-vadodara" },
  openGraph: {
    title: "explosion proof lighting in Vadodara | VadodaraExperts",
    description: "Professional explosion proof lighting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/explosion-proof-lighting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="explosion-proof-lighting-vadodara" />;
}
