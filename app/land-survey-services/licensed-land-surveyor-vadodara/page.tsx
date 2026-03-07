import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "licensed land surveyor in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional licensed land surveyor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/licensed-land-surveyor-vadodara" },
  openGraph: {
    title: "licensed land surveyor in Vadodara | VadodaraExperts",
    description: "Professional licensed land surveyor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/licensed-land-surveyor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="licensed-land-surveyor-vadodara" />;
}
