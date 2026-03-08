import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "fall protection system in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional fall protection system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/fall-protection-system-vadodara" },
  openGraph: {
    title: "fall protection system in Vadodara | VadodaraExperts",
    description: "Professional fall protection system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/fall-protection-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fall-protection-system-vadodara" />;
}
