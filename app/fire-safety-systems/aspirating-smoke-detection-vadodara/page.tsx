import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "aspirating smoke detection in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional aspirating smoke detection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/aspirating-smoke-detection-vadodara" },
  openGraph: {
    title: "aspirating smoke detection in Vadodara | VadodaraExperts",
    description: "Professional aspirating smoke detection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/aspirating-smoke-detection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aspirating-smoke-detection-vadodara" />;
}
