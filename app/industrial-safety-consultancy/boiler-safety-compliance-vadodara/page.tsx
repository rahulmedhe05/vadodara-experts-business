import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "boiler safety compliance in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional boiler safety compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/boiler-safety-compliance-vadodara" },
  openGraph: {
    title: "boiler safety compliance in Vadodara | VadodaraExperts",
    description: "Professional boiler safety compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/boiler-safety-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-safety-compliance-vadodara" />;
}
