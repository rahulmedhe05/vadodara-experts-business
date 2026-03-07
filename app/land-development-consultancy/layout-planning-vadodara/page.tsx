import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "layout planning in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional layout planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/layout-planning-vadodara" },
  openGraph: {
    title: "layout planning in Vadodara | VadodaraExperts",
    description: "Professional layout planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/layout-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="layout-planning-vadodara" />;
}
