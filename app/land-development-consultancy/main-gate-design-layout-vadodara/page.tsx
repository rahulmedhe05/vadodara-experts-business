import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "main gate design layout in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional main gate design layout services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/main-gate-design-layout-vadodara" },
  openGraph: {
    title: "main gate design layout in Vadodara | VadodaraExperts",
    description: "Professional main gate design layout services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/main-gate-design-layout-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="main-gate-design-layout-vadodara" />;
}
