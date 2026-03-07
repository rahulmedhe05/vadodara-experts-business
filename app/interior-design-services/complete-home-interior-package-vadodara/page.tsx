import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Complete home interior package in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional complete home interior package services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/complete-home-interior-package-vadodara" },
  openGraph: {
    title: "Complete home interior package in Vadodara | VadodaraExperts",
    description: "Professional complete home interior package services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/complete-home-interior-package-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="complete-home-interior-package-vadodara" />;
}
