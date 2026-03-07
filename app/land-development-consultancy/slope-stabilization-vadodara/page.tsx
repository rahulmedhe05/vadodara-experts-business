import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "slope stabilization in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional slope stabilization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/slope-stabilization-vadodara" },
  openGraph: {
    title: "slope stabilization in Vadodara | VadodaraExperts",
    description: "Professional slope stabilization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/slope-stabilization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="slope-stabilization-vadodara" />;
}
