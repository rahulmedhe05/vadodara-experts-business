import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "emergency preparedness plan in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional emergency preparedness plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/emergency-preparedness-plan-vadodara" },
  openGraph: {
    title: "emergency preparedness plan in Vadodara | VadodaraExperts",
    description: "Professional emergency preparedness plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/emergency-preparedness-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="emergency-preparedness-plan-vadodara" />;
}
