import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Passport photo studio in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional passport photo studio services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/passport-photo-studio-vadodara" },
  openGraph: {
    title: "Passport photo studio in Vadodara | VadodaraExperts",
    description: "Professional passport photo studio services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/passport-photo-studio-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="passport-photo-studio-vadodara" />;
}
