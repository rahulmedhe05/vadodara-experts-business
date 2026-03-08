import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "government approved surveyor in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional government approved surveyor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/government-approved-surveyor-vadodara" },
  openGraph: {
    title: "government approved surveyor in Vadodara | VadodaraExperts",
    description: "Professional government approved surveyor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/government-approved-surveyor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="government-approved-surveyor-vadodara" />;
}
