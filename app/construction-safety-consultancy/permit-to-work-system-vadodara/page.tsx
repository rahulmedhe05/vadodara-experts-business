import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "permit to work system in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional permit to work system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/permit-to-work-system-vadodara" },
  openGraph: {
    title: "permit to work system in Vadodara | VadodaraExperts",
    description: "Professional permit to work system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/permit-to-work-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="permit-to-work-system-vadodara" />;
}
