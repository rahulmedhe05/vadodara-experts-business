import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "anti-static flooring in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional anti-static flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/anti-static-flooring-vadodara" },
  openGraph: {
    title: "anti-static flooring in Vadodara | VadodaraExperts",
    description: "Professional anti-static flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/anti-static-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-static-flooring-vadodara" />;
}
