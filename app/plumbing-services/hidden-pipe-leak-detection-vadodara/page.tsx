import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Hidden pipe leak detection in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional hidden pipe leak detection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/hidden-pipe-leak-detection-vadodara" },
  openGraph: {
    title: "Hidden pipe leak detection in Vadodara | VadodaraExperts",
    description: "Professional hidden pipe leak detection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/hidden-pipe-leak-detection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hidden-pipe-leak-detection-vadodara" />;
}
