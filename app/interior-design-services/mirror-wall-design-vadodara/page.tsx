import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Mirror wall design in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional mirror wall design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/mirror-wall-design-vadodara" },
  openGraph: {
    title: "Mirror wall design in Vadodara | VadodaraExperts",
    description: "Professional mirror wall design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/mirror-wall-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mirror-wall-design-vadodara" />;
}
