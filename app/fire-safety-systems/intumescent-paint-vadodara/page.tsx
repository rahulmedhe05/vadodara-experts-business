import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "intumescent paint in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional intumescent paint services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/intumescent-paint-vadodara" },
  openGraph: {
    title: "intumescent paint in Vadodara | VadodaraExperts",
    description: "Professional intumescent paint services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/intumescent-paint-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="intumescent-paint-vadodara" />;
}
