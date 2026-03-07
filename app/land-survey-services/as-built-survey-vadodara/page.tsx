import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-survey-services")!;

export const metadata: Metadata = {
  title: "as-built survey in Vadodara | Land Survey Services | VadodaraExperts",
  description: "Professional as-built survey services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-survey-services/as-built-survey-vadodara" },
  openGraph: {
    title: "as-built survey in Vadodara | VadodaraExperts",
    description: "Professional as-built survey services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-survey-services/as-built-survey-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="as-built-survey-vadodara" />;
}
