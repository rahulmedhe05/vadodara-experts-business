import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "landing valve in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional landing valve services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/landing-valve-vadodara" },
  openGraph: {
    title: "landing valve in Vadodara | VadodaraExperts",
    description: "Professional landing valve services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/landing-valve-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="landing-valve-vadodara" />;
}
