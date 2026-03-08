import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "clean in place in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional clean in place services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/clean-in-place-vadodara" },
  openGraph: {
    title: "clean in place in Vadodara | VadodaraExperts",
    description: "Professional clean in place services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/clean-in-place-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clean-in-place-vadodara" />;
}
