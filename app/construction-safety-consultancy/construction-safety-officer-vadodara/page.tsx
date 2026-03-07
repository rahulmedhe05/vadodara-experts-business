import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "construction safety officer in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional construction safety officer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/construction-safety-officer-vadodara" },
  openGraph: {
    title: "construction safety officer in Vadodara | VadodaraExperts",
    description: "Professional construction safety officer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/construction-safety-officer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-safety-officer-vadodara" />;
}
