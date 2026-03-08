import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-packaging-services")!;

export const metadata: Metadata = {
  title: "bubble wrap packaging in Vadodara | Industrial Packaging Services | VadodaraExperts",
  description: "Professional bubble wrap packaging services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-packaging-services/bubble-wrap-packaging-vadodara" },
  openGraph: {
    title: "bubble wrap packaging in Vadodara | VadodaraExperts",
    description: "Professional bubble wrap packaging services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-packaging-services/bubble-wrap-packaging-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bubble-wrap-packaging-vadodara" />;
}
