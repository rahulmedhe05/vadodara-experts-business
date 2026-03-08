import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "land title clearance in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional land title clearance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/land-title-clearance-vadodara" },
  openGraph: {
    title: "land title clearance in Vadodara | VadodaraExperts",
    description: "Professional land title clearance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/land-title-clearance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-title-clearance-vadodara" />;
}
