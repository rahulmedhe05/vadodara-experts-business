import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "smart irrigation system in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional smart irrigation system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/smart-irrigation-system-vadodara" },
  openGraph: {
    title: "smart irrigation system in Vadodara | VadodaraExperts",
    description: "Professional smart irrigation system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/smart-irrigation-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-irrigation-system-vadodara" />;
}
