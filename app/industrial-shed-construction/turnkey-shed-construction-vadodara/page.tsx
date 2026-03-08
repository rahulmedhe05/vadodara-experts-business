import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-shed-construction")!;

export const metadata: Metadata = {
  title: "turnkey shed construction in Vadodara | Industrial Shed Construction | VadodaraExperts",
  description: "Professional turnkey shed construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-shed-construction/turnkey-shed-construction-vadodara" },
  openGraph: {
    title: "turnkey shed construction in Vadodara | VadodaraExperts",
    description: "Professional turnkey shed construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-shed-construction/turnkey-shed-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turnkey-shed-construction-vadodara" />;
}
