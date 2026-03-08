import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Drain blockage removal in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional drain blockage removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/drain-blockage-removal-vadodara" },
  openGraph: {
    title: "Drain blockage removal in Vadodara | VadodaraExperts",
    description: "Professional drain blockage removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/drain-blockage-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drain-blockage-removal-vadodara" />;
}
