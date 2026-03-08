import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "splash fill in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional splash fill services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/splash-fill-vadodara" },
  openGraph: {
    title: "splash fill in Vadodara | VadodaraExperts",
    description: "Professional splash fill services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/splash-fill-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="splash-fill-vadodara" />;
}
