import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("legal-services")!;

export const metadata: Metadata = {
  title: "Non disclosure agreement in Vadodara | Legal Services | VadodaraExperts",
  description: "Professional non disclosure agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/legal-services/non-disclosure-agreement-vadodara" },
  openGraph: {
    title: "Non disclosure agreement in Vadodara | VadodaraExperts",
    description: "Professional non disclosure agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/legal-services/non-disclosure-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="non-disclosure-agreement-vadodara" />;
}
