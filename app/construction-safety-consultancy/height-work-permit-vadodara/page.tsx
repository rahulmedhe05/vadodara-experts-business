import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "height work permit in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional height work permit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/height-work-permit-vadodara" },
  openGraph: {
    title: "height work permit in Vadodara | VadodaraExperts",
    description: "Professional height work permit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/height-work-permit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="height-work-permit-vadodara" />;
}
